import Link from "next/link"
import { Twitter, Instagram, Linkedin } from 'lucide-react'
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-background mt-6">
      <hr />
      <div className="container grid grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-5 mt-10">
        <div className="flex items-center md:col-span-1">
          <Link href="/" className="flex items-center space-x-2">
            <div>
              <Image src={'/logo.png'} alt="logo" width={120} height={120} />
            </div>
          </Link>
        </div>

        <div className="md:col-span-1">
          <h3 className="mb-4 text-sm font-semibold uppercase">INFOS PRATIQUES</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                À propos
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Livraisons & Reprises
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Mode d&apos;emploi
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                F.A.Q
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h3 className="mb-4 text-sm font-semibold uppercase">LÉGAL</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                CGU
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                CGV
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h3 className="mb-4 text-sm font-semibold uppercase">MON COMPTE</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Accéder à mon compte
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Ma liste d&apos;envie
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Créer un compte
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Mot de passe oublié
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h3 className="mb-4 text-sm font-semibold uppercase">NOUS SUIVRE</h3>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
