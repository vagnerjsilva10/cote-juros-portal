import Image from 'next/image';
import Link from 'next/link';

import { editorialPosts } from '@/data/homepage';

export function EditorialSection() {
  return (
    <section id="editorial" className="section-spaced section-muted editorial">
      <div className="container">
        <div className="section-head">
          <div>
            <h2>Cote Editorial</h2>
            <p>Educação financeira com rigor técnico e linguagem clara.</p>
          </div>
          <Link className="btn btn-secondary" href="/editorial-artigo">
            Explorar biblioteca
          </Link>
        </div>

        <div className="editorial-grid">
          {editorialPosts.map((post) => (
            <Link key={post.title} href="/editorial-artigo" className="editorial-card">
              <div className="editorial-image">
                <Image src={post.image} alt={post.title} width={900} height={560} />
                <span>{post.category}</span>
              </div>
              <h3>{post.title}</h3>
              <p>
                {post.author} - {post.readTime}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
