'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { BlogPostData } from '@/lib/blog';
import { Button } from '@/components/ui/button';

interface BlogPostProps {
  post: BlogPostData;
}

export function BlogPost({ post }: BlogPostProps) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post.title;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    email: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(`Check out this article: ${shareUrl}`)}`,
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 text-emerald-200 hover:text-white transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blog</span>
            </Link>

            <div className="mb-6">
              <span className="bg-emerald-custom text-white px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-montserrat font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center space-x-6 text-gray-200 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>By Prashant Sapkota</span>
              </div>
            </div>

            <p className="text-xl text-gray-200 leading-relaxed">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-3"
              >
                {/* Featured Image */}
                <div className="relative h-96 rounded-2xl overflow-hidden mb-12 shadow-xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Article Content */}
                <div 
                  className="prose prose-lg max-w-none prose-headings:font-montserrat prose-headings:text-deep-blue prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-emerald-custom prose-a:no-underline hover:prose-a:underline prose-strong:text-deep-blue prose-ul:text-gray-700 prose-ol:text-gray-700"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-montserrat font-semibold text-deep-blue mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center space-x-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-emerald-50 hover:text-emerald-custom transition-colors duration-300"
                      >
                        <Tag className="w-3 h-3" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:col-span-1"
              >
                <div className="sticky top-24 space-y-8">
                  {/* Share Buttons */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-montserrat font-semibold text-deep-blue mb-4 flex items-center space-x-2">
                      <Share2 className="w-5 h-5" />
                      <span>Share Article</span>
                    </h3>
                    <div className="space-y-3">
                      <a
                        href={shareLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                      >
                        <Facebook className="w-5 h-5" />
                        <span>Facebook</span>
                      </a>
                      <a
                        href={shareLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors duration-300"
                      >
                        <Twitter className="w-5 h-5" />
                        <span>Twitter</span>
                      </a>
                      <a
                        href={shareLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-300"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span>LinkedIn</span>
                      </a>
                      <a
                        href={shareLinks.email}
                        className="flex items-center space-x-3 p-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
                      >
                        <Mail className="w-5 h-5" />
                        <span>Email</span>
                      </a>
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                        <span className="text-white font-montserrat font-bold text-2xl">PS</span>
                      </div>
                      <h3 className="text-lg font-montserrat font-semibold text-deep-blue mb-2">
                        Prashant Sapkota
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Certified Financial Planner with 2+ years of experience helping families achieve their financial goals.
                      </p>
                      <Button
                        asChild
                        size="sm"
                        className="bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                      >
                        <Link href="/contact">
                          Schedule Consultation
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-montserrat font-bold mb-6">
              Ready to Take Action?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Don't let financial uncertainty hold you back. Schedule a free consultation 
              to discuss how these strategies can work for your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-emerald-custom hover:bg-emerald-600 text-white font-montserrat font-semibold px-8 py-4 text-lg hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 animate-glow"
              >
                <Link href="/contact">
                  Schedule Free Consultation
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-deep-blue font-montserrat font-semibold px-8 py-4 text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <Link href="/blog">
                  Read More Articles
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}