import React from 'react'
import ButtonArrow from './tokens/ButtonArrow'
import Article from './tokens/Article'
import articlesData from '@data/articles'
const BlogSection = () => {
  return (
    <section className='blog-section'>
        <div className='horizontal justify-between items-end'>
            <h2 className='md:headline-4 headline-5'>Articles</h2>
            <ButtonArrow className='!button-s'>More Articles</ButtonArrow>
        </div>

        <div className='vertical gap-6 sm:horizontal lg:gap-8'>
            {articlesData.map((article , i) => (
                <Article key={i} title={article.title} image={article.image} />
            ))}
        </div>
    </section>
  )
}

export default BlogSection