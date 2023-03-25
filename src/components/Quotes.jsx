import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { quotes } from '../constants';

const QuoteCard = ({ index, quote, name, image  }) => {
	return (
		<motion.div
			variants={fadeIn("", "spring", index * 0.5, 0.75)}
			className="flex flex-col bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
		>
			<p className="text-white font-black text-[48px]">"</p>
			<p className="text-white tracking-wider text-[18px]">{ quote }</p>
			<div className="mt-auto">
				<div className="mt-7 flex justify-between items-center gap-1">
					<div className="flex-1 flex justify-between items-center">
						<p className="text-white font-medium text-[16px]">
							<span className="blue-text-gradient">@ </span>
							{ name }
						</p>
						<img className="w-12 h-12 rounded-full object-cover" src={ image } alt={ name } />
					</div>
				</div>
			</div>
		</motion.div>
	)
}

const Quotes = () => {
  return (
    <div className="mt-12 bg-bl rounded-[20px]">
			<div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
				<motion.div
					variants={textVariant()}
				>
					<h2 className={styles.sectionHeadText}>Great people quotes</h2>
				</motion.div>
			</div>
			<div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
				{
					quotes.map((quote, i) => (
						<QuoteCard 
							key={quote.name}
							index={i}
							{...quote}
						/>
					))
				}
			</div>
		</div>
  )
}

export default SectionWrapper(Quotes, "");