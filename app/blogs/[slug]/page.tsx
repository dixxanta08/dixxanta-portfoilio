import { Metadata } from "next";
import { notFound } from "next/navigation";
import blogsData from "@/app/data/blogs.json";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  author: string;
  publishedDate: string;
  thumbnail: string;
  content: {
    introduction: string;
    sections: {
      heading: string;
      content: string;
    }[];
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug) as BlogPost | undefined;

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.description,
    keywords: blog.keywords,
    authors: [{ name: blog.author }],
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      publishedTime: blog.publishedDate,
      authors: [blog.author],
      images: [
        {
          url: blog.thumbnail,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.thumbnail],
    },
  };
}

// Server component with SSR
export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug) as BlogPost | undefined;

  if (!blog) {
    notFound();
  }

  // Format date
  const formattedDate = new Date(blog.publishedDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {blog.title}
          </h1>
          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm space-x-4">
            <span>By {blog.author}</span>
            <span>•</span>
            <time dateTime={blog.publishedDate}>{formattedDate}</time>
          </div>
        </header>

        {/* Introduction */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            {blog.content.introduction}
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {blog.content.sections.map((section, index) => (
            <section
              key={index}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {section.heading}
              </h2>
              <div className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                {section.content.split("\n").map((paragraph, pIndex) => {
                  // Handle list items
                  if (paragraph.trim().startsWith("-")) {
                    return (
                      <li key={pIndex} className="ml-6">
                        {paragraph.trim().substring(1).trim()}
                      </li>
                    );
                  }
                  // Handle bold text with **
                  else if (paragraph.includes("**")) {
                    const parts = paragraph.split("**");
                    return (
                      <p key={pIndex} className="mb-4">
                        {parts.map((part, i) =>
                          i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                        )}
                      </p>
                    );
                  }
                  // Handle italic text with *
                  else if (paragraph.includes("*")) {
                    const parts = paragraph.split("*");
                    return (
                      <p key={pIndex} className="mb-4">
                        {parts.map((part, i) =>
                          i % 2 === 1 ? <em key={i}>{part}</em> : part
                        )}
                      </p>
                    );
                  }
                  // Regular paragraph
                  else if (paragraph.trim()) {
                    return (
                      <p key={pIndex} className="mb-4">
                        {paragraph}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {blog.keywords.map((keyword, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Share Your Thoughts
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            If you are a Nepali developer or aspirant, share your experience in
            interviews or AI-assisted projects in the comments below. How are
            you preparing to stay relevant as the industry evolves?
          </p>
        </div>
      </div>
    </article>
  );
}
