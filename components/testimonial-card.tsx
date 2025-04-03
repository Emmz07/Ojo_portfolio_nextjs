import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  image: string;
}

export function TestimonialCard({
  content,
  author,
  role,
  image,
}: TestimonialCardProps) {
  return (
    <Card className="p-6">
      <Quote className="h-8 w-8 text-primary mb-4" />
      <p className="text-lg mb-6">{content}</p>
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={author}
            fill
            className="object-cover"
            sizes="100%"
          />
        </div>
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </Card>
  );
}