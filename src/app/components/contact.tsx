"use client"

import { Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 to-gray-100">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Entre em Contato</h2>
      <p className="mb-8 text-lg text-gray-600 font-medium">
        Me encontre nos canais abaixo:
      </p>

      <ul className="space-y-5">
        <li>
          <Link
            href="mailto:dinizmarcienio@gmail.com"
            className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <span className="p-2 rounded-full bg-blue-100 text-blue-600">
              <Mail size={22} />
            </span>
            <span className="font-semibold text-gray-800">
              dinizmarcienio@gmail.com
            </span>
          </Link>
        </li>

        <li>
          <Link
            href="https://github.com/MarcienioDev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <span className="p-2 rounded-full bg-gray-200 text-gray-800">
              <Github size={22} />
            </span>
            <span className="font-semibold text-gray-800">MarcienioDev</span>
          </Link>
        </li>

        <li>
          <Link
            href="https://www.linkedin.com/in/marcieniodiniz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <span className="p-2 rounded-full bg-blue-100 text-blue-700">
              <Linkedin size={22} />
            </span>
            <span className="font-semibold text-gray-800">marcieniodiniz</span>
          </Link>
        </li>
      </ul>
    </section>
  )
}
