"use client";
import Image from 'next/image'
import styles from '@/styles/page.module.css'
import { Container, Box } from '@mui/material'
import Header from '@/components/Header';
import SearchInput from '@/components/SearchInput';
import EmojisResult from '@/components/EmojisResult';
import filterEmojis from "@/utils/filterEmojis";

import { useState } from 'react';

export default function Home() {

	const [filteredEmojis, setFilteredEmojis] = useState(filterEmojis("",20));

	const handleChange = (textSearch: string) => {
		setFilteredEmojis(filterEmojis(textSearch, 20));
	};
	
	return (
		<main className={styles.main}>
			<Container maxWidth="sm" sx={{ backgroundColor: "Background.paper" }}>
				<Header />
				<SearchInput handleChange={handleChange}/>
				<EmojisResult emojis={filteredEmojis} />
			</Container>
		</main>
	)
}
