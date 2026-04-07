import Image from 'next/image';

import { editorialPosts } from '@/data/homepage';

export function EditorialSection() {
  return (
    <section id="editorial" className="section-spaced section-muted editorial">
      <div className="container">
        <div className="section-head">
          <div>
            <h2>Cote Editorial</h2>
            <p>Educacao financeira com rigor tecnico e linguagem clara.</p>
          </div>
          <button className="btn btn-secondary" type="button">
            Explorar biblioteca
          </button>
        </div>

        <div className="editorial-grid">
          {editorialPosts.map((post) => (
            <article key={post.title} className="editorial-card">
              <div className="editorial-image">
                <Image src={post.image} alt={post.title} width={900} height={560} />
                <span>{post.category}</span>
              </div>
              <h3>{post.title}</h3>
              <p>
                {post.author} - {post.readTime}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

