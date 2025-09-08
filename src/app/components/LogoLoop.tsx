"use client";

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import Image from "next/image";

export type LogoItem =
  | {
      node: React.ReactNode;
      href?: string;
      title?: string;
      ariaLabel?: string;
    }
  | {
      src: string;
      alt?: string;
      href?: string;
      title?: string;
      srcSet?: string;
      sizes?: string;
      width?: number;
      height?: number;
    };

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: "left" | "right";
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2,
} as const;

const toCssLength = (value?: number | string): string | undefined =>
  typeof value === "number" ? `${value}px` : value;

const cx = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(" ");

export const LogoLoop: React.FC<LogoLoopProps> = ({
  logos,
  speed = 120,
  direction = "left",
  width = "100%",
  logoHeight = 64, // <-- aumentei o tamanho padrão dos ícones
  gap = 48, // <-- aumentei o espaçamento
  pauseOnHover = true,
  fadeOut = false,
  fadeOutColor,
  scaleOnHover = false,
  ariaLabel = "Partner logos",
  className,
  style,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const seqRef = useRef<HTMLUListElement>(null);

  const [seqWidth, setSeqWidth] = useState<number>(0);
  const [copyCount, setCopyCount] = useState<number>(
    ANIMATION_CONFIG.MIN_COPIES,
  );
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // velocidade com direção
  const targetVelocity = useMemo(() => {
    const magnitude = Math.abs(speed);
    const dirMultiplier = direction === "left" ? 1 : -1;
    return magnitude * dirMultiplier;
  }, [speed, direction]);

  // resize observer
  const updateDimensions = useCallback(() => {
    const containerWidth = containerRef.current?.clientWidth ?? 0;
    const sequenceWidth = seqRef.current?.scrollWidth ?? 0;

    if (sequenceWidth > 0) {
      setSeqWidth(sequenceWidth);
      const copiesNeeded =
        Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
      setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    const resizeObserver = new ResizeObserver(updateDimensions);
    if (containerRef.current) resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [updateDimensions]);

  // animação loop infinita
  useEffect(() => {
    const track = trackRef.current;
    if (!track || seqWidth <= 0) return;

    let rafId: number | null = null;
    let lastTime: number | null = null;
    let offset = 0;
    let velocity = 0;

    const animate = (time: number) => {
      if (lastTime === null) lastTime = time;
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      const target = pauseOnHover && isHovered ? 0 : targetVelocity;
      const easing = 1 - Math.exp(-delta / ANIMATION_CONFIG.SMOOTH_TAU);
      velocity += (target - velocity) * easing;

      offset = (offset + velocity * delta) % seqWidth;
      if (offset < 0) offset += seqWidth;

      track.style.transform = `translate3d(${-offset}px,0,0)`;

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [seqWidth, targetVelocity, pauseOnHover, isHovered]);

  // css vars
  const cssVars = useMemo(
    () =>
      ({
        "--logoloop-gap": `${gap}px`,
        "--logoloop-logoHeight": `${logoHeight}px`,
        ...(fadeOutColor && { "--logoloop-fadeColor": fadeOutColor }),
      }) as React.CSSProperties,
    [gap, logoHeight, fadeOutColor],
  );

  const renderLogoItem = useCallback(
    (item: LogoItem, key: React.Key) => {
      const isNode = "node" in item;

      const content = isNode ? (
        <span className="inline-flex items-center">{item.node}</span>
      ) : (
        <Image
          src={item.src}
          alt={item.alt ?? ""}
          title={item.title}
          width={item.width ?? 80} // <-- largura maior
          height={item.height ?? 80} // <-- altura maior
          sizes={item.sizes ?? "100px"}
          draggable={false}
          className={cx(
            "h-[var(--logoloop-logoHeight)] w-auto object-contain block pointer-events-none",
            scaleOnHover &&
              "transition-transform duration-300 group-hover:scale-110",
          )}
        />
      );

      const inner = item.href ? (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.title ?? "logo link"}
          className="hover:opacity-80 transition-opacity duration-200"
        >
          {content}
        </a>
      ) : (
        content
      );

      return (
        <li
          key={key}
          className="flex-none mr-[var(--logoloop-gap)]"
          role="listitem"
        >
          {inner}
        </li>
      );
    },
    [scaleOnHover],
  );

  const logoLists = useMemo(
    () =>
      Array.from({ length: copyCount }, (_, idx) => (
        <ul
          key={idx}
          className="flex items-center"
          ref={idx === 0 ? seqRef : undefined}
          aria-hidden={idx > 0}
        >
          {logos.map((logo, i) => renderLogoItem(logo, `${idx}-${i}`))}
        </ul>
      )),
    [copyCount, logos, renderLogoItem],
  );

  return (
    <div
      ref={containerRef}
      className={cx("relative overflow-hidden group", className)}
      style={{ ...cssVars, width: toCssLength(width), ...style }}
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      {fadeOut && (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--logoloop-fadeColor,#fff)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--logoloop-fadeColor,#fff)] to-transparent" />
        </>
      )}
      <div
        ref={trackRef}
        className="flex w-max will-change-transform select-none"
      >
        {logoLists}
      </div>
    </div>
  );
};

export default LogoLoop;
