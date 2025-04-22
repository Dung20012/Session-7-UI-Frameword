"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Menu,
  X,
  Play,
  Compass,
  Map,
  Heart,
  Shield,
  ArrowRight,
  ArrowLeft,
  Check,
  Star,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Send,
} from "lucide-react"

// Destination Card Component
interface DestinationCardProps {
  image: string
  title: string
  location: string
  rating: number
  price: number
}

function DestinationCard({ image, title, location, rating, price }: DestinationCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="relative h-64 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <div className="flex items-center bg-orange-100 text-orange-500 px-2 py-1 rounded-lg">
            <Star className="h-4 w-4 fill-orange-500 text-orange-500 mr-1" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">{location}</p>
          <p className="text-orange-500 font-bold">
            ${price}
            <span className="text-gray-400 font-normal">/person</span>
          </p>
        </div>
      </div>
    </div>
  )
}

// Testimonial Card Component
interface TestimonialCardProps {
  image: string
  name: string
  location: string
  rating: number
  testimonial: string
}

function TestimonialCard({ image, name, location, rating, testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm">
      <div className="flex items-center mb-6">
        <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <p className="text-gray-600">{location}</p>
        </div>
        <div className="ml-auto flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
          ))}
        </div>
      </div>
      <p className="text-gray-700 italic">"{testimonial}"</p>
    </div>
  )
}

// Navbar Component
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white py-4 px-6 md:px-12 lg:px-24 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-orange-500">
            Travlog
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-gray-900 hover:text-orange-500 font-medium">
            Home
          </Link>
          <Link href="#" className="text-gray-500 hover:text-orange-500 font-medium">
            Discover
          </Link>
          <Link href="#" className="text-gray-500 hover:text-orange-500 font-medium">
            Special Deals
          </Link>
          <Link href="#" className="text-gray-500 hover:text-orange-500 font-medium">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-900 hover:text-orange-500">
            Log In
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">Sign Up</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <Link href="#" className="text-gray-900 hover:text-orange-500 font-medium">
              Home
            </Link>
            <Link href="#" className="text-gray-500 hover:text-orange-500 font-medium">
              Discover
            </Link>
            <Link href="#" className="text-gray-500 hover:text-orange-500 font-medium">
              Special Deals
            </Link>
            <Link href="#" className="text-gray-500 hover:text-orange-500 font-medium">
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="ghost" className="text-gray-900 hover:text-orange-500 justify-start">
                Log In
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">Sign Up</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

// Hero Section Component
function Hero() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="inline-block bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Explore the world!
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Travel <span className="text-orange-500">top destination</span> of the world
            </h1>
            <p className="text-gray-600 mb-8 max-w-lg">
              We always make our customers happy by providing as many choices as possible
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-6">
                Get Started
              </Button>
              <Button variant="outline" className="rounded-full border-gray-300 px-8 py-6 flex items-center gap-2">
                <div className="bg-orange-500 rounded-full p-2 flex items-center justify-center">
                  <Play size={12} className="text-white" />
                </div>
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative h-[400px] md:h-[500px] w-full">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Travel destinations"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Services Section Component
function Services() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm font-medium mb-4">
            SERVICES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our top value categories for you</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Compass className="text-orange-500 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Best Tour Guide</h3>
            <p className="text-gray-600">
              What looked like a small patch of purple grass, above five feet square, was moving across the sand in
              their direction.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Map className="text-blue-500 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Easy Booking</h3>
            <p className="text-gray-600">
              Square, was moving across the sand in their direction. When it came near enough he perceived that it was
              not grass.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="text-green-500 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Weather Forecast</h3>
            <p className="text-gray-600">
              When it came near enough he perceived that it was not grass; there were no blades. It was a compact moving
              mass.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-purple-500 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Best Experience</h3>
            <p className="text-gray-600">
              It was a compact moving mass of people on the march. He became aware that the mass was heading toward the
              water.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Destinations Section Component
function Destinations() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <div className="inline-block bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm font-medium mb-4">
              TOP DESTINATION
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Explore top destinations</h2>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            <Button variant="outline" className="rounded-full p-3">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 rounded-full p-3">
              <ArrowRight className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DestinationCard
            image="/placeholder.svg?height=400&width=300"
            title="Paradise Beach, Bantayan Island"
            location="Rome, Italy"
            rating={4.8}
            price={550}
          />
          <DestinationCard
            image="/placeholder.svg?height=400&width=300"
            title="Ocean with full of Colors"
            location="Maldives"
            rating={4.5}
            price={750}
          />
          <DestinationCard
            image="/placeholder.svg?height=400&width=300"
            title="Mountain View, Above the cloud"
            location="United Arab Emirates"
            rating={5.0}
            price={850}
          />
        </div>
      </div>
    </section>
  )
}

// Booking Section Component
function Booking() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 relative">
            <div className="relative h-[400px] md:h-[500px] w-full">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Booking illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="md:w-1/2 md:pl-12">
            <div className="inline-block bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
              TRAVEL POINT
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We helping you find your dream destination
            </h2>
            <p className="text-gray-600 mb-8">
              Discover your ideal experience with our curated selection of extraordinary destinations. Let us guide you
              to the perfect location for your next adventure.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="bg-green-100 p-1 rounded-full mr-3">
                  <Check className="h-4 w-4 text-green-500" />
                </div>
                <p className="text-gray-700">Find popular destinations around the world</p>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 p-1 rounded-full mr-3">
                  <Check className="h-4 w-4 text-green-500" />
                </div>
                <p className="text-gray-700">Book flights, hotels, and experiences</p>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 p-1 rounded-full mr-3">
                  <Check className="h-4 w-4 text-green-500" />
                </div>
                <p className="text-gray-700">24/7 dedicated customer support</p>
              </div>
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-6">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Testimonials Section Component
function Testimonials() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm font-medium mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What our customers say about us</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <Button variant="outline" className="rounded-full p-3 md:order-1 order-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>

          <div className="md:order-2 order-1 flex-1 max-w-2xl">
            <TestimonialCard
              image="/placeholder.svg?height=100&width=100"
              name="Mark Smith"
              location="Travel Enthusiast"
              rating={5}
              testimonial="I had the most amazing experience with Travlog! The booking process was seamless, and the destinations were exactly as described. The local guides were knowledgeable and friendly. I'll definitely be using their services for my future travels."
            />
          </div>

          <Button className="bg-orange-500 hover:bg-orange-600 rounded-full p-3 md:order-3 order-3">
            <ArrowRight className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
    </section>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-white py-16 px-6 md:px-12 lg:px-24 border-t">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="text-2xl font-bold text-orange-500 mb-6 inline-block">
              Travlog
            </Link>
            <p className="text-gray-600 mb-6">
              Discover the world with us and experience unforgettable journeys to the most beautiful destinations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-orange-100 transition-colors">
                <Facebook className="h-5 w-5 text-gray-700" />
              </a>
              <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-orange-100 transition-colors">
                <Twitter className="h-5 w-5 text-gray-700" />
              </a>
              <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-orange-100 transition-colors">
                <Instagram className="h-5 w-5 text-gray-700" />
              </a>
              <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-orange-100 transition-colors">
                <Youtube className="h-5 w-5 text-gray-700" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500">
                  Logistics
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500">
                  Privacy & Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500">
                  Help/FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500">
                  Affiliates
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter and get travel tips and exclusive discounts
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent pr-12"
              />
              <Button className="absolute right-1 top-1 bg-orange-500 hover:bg-orange-600 rounded-full p-2">
                <Send className="h-5 w-5 text-white" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} Travlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Main Home Component
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <Booking />
      <Testimonials />
      <Footer />
    </main>
  )
}
