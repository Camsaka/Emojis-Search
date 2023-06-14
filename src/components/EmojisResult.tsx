import { Box, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Fragment, JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import ClipboardJS from "clipboard";

export default function EmojisResult({emojis}){

	const [isCopied, setIsCopied] = useState(false);
	useEffect(() => {
			const clipboard = new ClipboardJS(".copy-to-clipboard");
			clipboard.on("success", (e) => {
				setIsCopied(true);
				setTimeout(() => {
					setIsCopied(false)
				}, 1500);
				e.clearSelection();
			})
			return () => {
				clipboard.destroy();
			}
		}, [])

	return (
		<Box>
			<List>
				{emojis.map((emoji: { emoji: string  | undefined; description: string | null | undefined; }, index: Key | null | undefined) => (
					<Fragment key={index}>
						<ListItem 
							className="copy-to-clipboard" 
							data-clipboard-text={emoji.emoji}
							sx={{
								cursor:"pointer",
								"&:hover":{
									backgroundColor:"#2979ff",
									"& > .MuiListItemText-root": {
										display:"flex",
									}
								}
							}}
							>
							<ListItemIcon sx={{color: "#000000" }}>{emoji.emoji}</ListItemIcon>
							<ListItemText>{emoji.description}</ListItemText>
							<ListItemText sx={{
								color:"#f44336", 
								display:"none", 
								justifyContent:"flex-end"
								}}>
									{isCopied ? "Copié" : "Cliquer pour copier" }
							</ListItemText>
							<Divider />
						</ListItem>
						<Divider />
					</ Fragment>
				))}
			</List>
		</Box>
	);
}