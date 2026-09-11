/** @format */

import { defineField, defineType } from "sanity";

export const blog = defineType({
  name: "blog",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt / Summary",
      type: "text",
      rows: 3,
      description:
        "A short summary displayed on blog cards, search results, and social previews.",
      validation: (Rule) => Rule.max(260),
    }),
    defineField({
      name: "mainImage",
      title: "Main Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
          description: "Crucial for SEO and accessibility.",
        }),
        defineField({
          name: "caption",
          title: "Caption",
          type: "string",
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author Details",
      type: "object",
      fields: [
        defineField({
          name: "name",
          title: "Author Name",
          type: "string",
          initialValue: "Walnut Grove Veterinary Team",
        }),
        defineField({
          name: "role",
          title: "Author Role",
          type: "string",
          initialValue: "Veterinarian & Pet Care Specialist",
        }),
        defineField({
          name: "image",
          title: "Author Photo / Avatar",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "bio",
          title: "Short Bio",
          type: "text",
          rows: 2,
          initialValue:
            "Dedicated to providing compassionate, comprehensive care for pets and empowering pet parents with trusted guidance.",
        }),
      ],
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Pet Health & Wellness", value: "Pet Health & Wellness" },
          { title: "Preventative Care", value: "Preventative Care" },
          { title: "Nutrition & Safety", value: "Nutrition & Safety" },
          { title: "Surgical & Specialized Care", value: "Surgical & Specialized Care" },
          { title: "Puppy & Kitten Care", value: "Puppy & Kitten Care" },
          { title: "Clinic News & Community", value: "Clinic News & Community" },
        ],
      },
      initialValue: "Pet Health & Wellness",
    }),
    defineField({
      name: "readTime",
      title: "Estimated Read Time",
      type: "string",
      description: 'e.g., "5 min read"',
      initialValue: "4 min read",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Tags for filtering and discovery (e.g. dogs, cats, vaccines, nutrition).",
    }),

    // RICH CONTENT WITH MULTI-LEVEL INTERLINKING
    defineField({
      name: "content",
      title: "Article Content",
      type: "array",
      description:
        "The rich body of the article with support for headings, images, callouts, service embeds, and internal links.",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2 (Section Heading)", value: "h2" },
            { title: "H3 (Subheading)", value: "h3" },
            { title: "H4 (Small Heading)", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
              { title: "Strike", value: "strike-through" },
              { title: "Code", value: "code" },
            ],
            annotations: [
              // External Link
              {
                name: "link",
                title: "External Link",
                type: "object",
                fields: [
                  {
                    name: "href",
                    title: "URL",
                    type: "url",
                    validation: (Rule) =>
                      Rule.uri({
                        scheme: ["http", "https", "mailto", "tel"],
                      }),
                  },
                  {
                    name: "blank",
                    title: "Open in new tab",
                    type: "boolean",
                    initialValue: true,
                  },
                ],
              },
              // Interlinking: Direct internal blog reference
              {
                name: "internalBlogLink",
                title: "Internal Blog Link",
                type: "object",
                fields: [
                  {
                    name: "reference",
                    title: "Blog Post Reference",
                    type: "reference",
                    to: [{ type: "blog" }],
                    description: "Select another blog post to interlink directly.",
                  },
                ],
              },
              // Interlinking: Hospital Service Link
              {
                name: "serviceLink",
                title: "Hospital Service / Page Link",
                type: "object",
                fields: [
                  {
                    name: "path",
                    title: "Service Path",
                    type: "string",
                    description:
                      "Relative internal path, e.g. /services/preventative-care or /contact",
                    options: {
                      list: [
                        { title: "All Services", value: "/services" },
                        { title: "Preventative Care", value: "/services/preventative-care" },
                        { title: "Vaccines", value: "/services/vaccines" },
                        { title: "Parasite Prevention", value: "/services/parasite-prevention" },
                        { title: "Puppy & Kitten Care", value: "/services/puppy-kitten-care" },
                        { title: "Microchipping", value: "/services/microchipping" },
                        { title: "Pet Boarding", value: "/services/pet-boarding-services" },
                        { title: "Dental Services", value: "/services/dental-services" },
                        { title: "Pet Surgery", value: "/services/pet-surgery" },
                        { title: "Spay & Neuter", value: "/services/spay-neuter" },
                        { title: "Chronic Pain Management", value: "/services/chronic-pain-management" },
                        { title: "Laboratory Services", value: "/services/lab-services" },
                        { title: "Bloodwork", value: "/services/bloodwork" },
                        { title: "Pet X-Ray", value: "/services/pet-x-ray" },
                        { title: "Ultrasound", value: "/services/ultrasound-services" },
                        { title: "Skin & Ear Infections", value: "/services/skin-ear-infections" },
                        { title: "Small Mammal Medicine", value: "/services/small-mammal-medicine" },
                        { title: "Compassionate Euthanasia", value: "/services/euthanasia" },
                        { title: "Contact Us / Appointment", value: "/contact" },
                        { title: "How To Videos", value: "/resources/how-to-videos" },
                        { title: "Poisonous Plants", value: "/resources/poisonous-plants" },
                        { title: "Pet Food Recalls", value: "/resources/pet-food-recalls" },
                      ],
                    },
                  },
                ],
              },
            ],
          },
        },
        // Inline Image
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alternative Text",
              type: "string",
            },
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
          ],
        },
        // Embedded Callout Box
        {
          name: "callout",
          title: "Callout Box",
          type: "object",
          fields: [
            {
              name: "type",
              title: "Callout Type",
              type: "string",
              options: {
                list: [
                  { title: "Tip (Green)", value: "tip" },
                  { title: "Important / Alert (Blue)", value: "info" },
                  { title: "Warning / Note (Purple)", value: "warning" },
                ],
              },
              initialValue: "tip",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "message",
              title: "Message Text",
              type: "text",
              rows: 3,
            },
          ],
        },
        // Embedded Service CTA Card for In-Article Interlinking
        {
          name: "serviceCta",
          title: "Service Promotion Card (CTA)",
          type: "object",
          description: "Embed an interactive service card directly in the article body.",
          fields: [
            {
              name: "title",
              title: "Card Heading",
              type: "string",
              initialValue: "Need Professional Veterinary Care in Langley?",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
              rows: 2,
              initialValue:
                "Our compassionate veterinary team is here to support your pet's wellness journey every step of the way.",
            },
            {
              name: "serviceLink",
              title: "Target Service URL",
              type: "string",
              initialValue: "/services/preventative-care",
            },
            {
              name: "buttonText",
              title: "Button Text",
              type: "string",
              initialValue: "Explore This Service",
            },
          ],
        },
      ],
    }),

    // EXPLICIT INTERLINKING: Related Posts (References to other blogs)
    defineField({
      name: "relatedPosts",
      title: "Curated Related Blog Posts",
      type: "array",
      description:
        "Select specific blog posts to feature in the 'Related Articles' section at the end of this article.",
      of: [
        {
          type: "reference",
          to: [{ type: "blog" }],
        },
      ],
      validation: (Rule) => Rule.max(3),
    }),

    // EXPLICIT INTERLINKING: Related Hospital Services
    defineField({
      name: "relatedServices",
      title: "Interlinked Hospital Services",
      type: "array",
      description:
        "Highlight specific clinic services related to this article in the article sidebar and footer.",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Service Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "href",
              title: "Service Path",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Short Description",
              type: "string",
            },
          ],
        },
      ],
    }),

    // SEO METADATA
    defineField({
      name: "metaData",
      title: "SEO Metadata",
      type: "object",
      fields: [
        defineField({
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
          description: "Search engine title (defaults to article title if empty).",
        }),
        defineField({
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
          description: "Search snippet description (defaults to excerpt if empty).",
        }),
        defineField({
          name: "metaImage",
          title: "Meta Image",
          type: "image",
          options: { hotspot: true },
          description: "Social share image (defaults to featured image if empty).",
        }),
        defineField({
          name: "canonical",
          title: "Canonical URL",
          type: "string",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
      date: "publishedAt",
    },
    prepare(selection) {
      const { author, date } = selection;
      const formattedDate = date
        ? new Date(date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : "Draft";
      return {
        ...selection,
        subtitle: `${author || "Team"} • ${formattedDate}`,
      };
    },
  },
});
