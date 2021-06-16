const paragraphs = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at viverra mauris, a ornare eros. Mauris interdum accumsan tellus, et volutpat elit sollicitudin at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ultrices pellentesque feugiat. Morbi quam lorem, bibendum et est eget, faucibus ultrices magna. Ut lobortis commodo nulla, vel ultrices purus commodo id. Nullam suscipit erat pretium pellentesque porta. Curabitur faucibus blandit nisi. Praesent imperdiet, elit et finibus elementum, nulla eros consectetur dui, at hendrerit odio tellus vel diam.",

	"Maecenas sagittis ipsum eu dolor pellentesque ultricies. Maecenas sit amet nulla gravida nisl pellentesque ornare vitae sed lorem. Ut rhoncus condimentum lorem sit amet condimentum. Praesent vel urna quis mauris dictum tristique. Maecenas ac sapien sed nunc placerat scelerisque. Donec quis viverra velit, at auctor enim. Pellentesque mauris lorem, vehicula vel feugiat ut, finibus quis sapien. Duis posuere neque nulla, sit amet porta leo pellentesque eu. Praesent vestibulum rhoncus augue rutrum dapibus.",

	"Proin et venenatis nunc. Nunc tempus sem vitae lorem accumsan, ac aliquet lacus cursus. Vestibulum turpis nisi, gravida in condimentum ac, accumsan nec ligula. Phasellus sed ex vel est efficitur fringilla ut eu dui. Pellentesque condimentum finibus eros, sed rutrum nulla ornare sed. Nulla dictum elementum nulla sed viverra. Pellentesque in neque sed quam suscipit pulvinar sed id nulla. Phasellus sapien velit, tincidunt fermentum quam fringilla, interdum faucibus dui. Phasellus bibendum eu ligula nec dapibus. Donec laoreet iaculis orci vel mollis. Aliquam erat volutpat.",

	"Cras consectetur metus enim, ac pharetra leo gravida eget. Phasellus iaculis nisi ac laoreet ultricies. Morbi viverra vehicula massa, nec vehicula eros molestie sit amet. Nullam id elit dictum, cursus mauris vel, gravida libero. Maecenas congue tempor mi eu viverra. Etiam in dignissim diam, vitae fermentum magna. Morbi finibus interdum nisi a elementum. Cras laoreet tellus eget mi maximus, et imperdiet nunc sollicitudin. Fusce tempus sem vel augue mollis, at porttitor nisl maximus. Donec vitae malesuada orci, nec euismod orci. Quisque eu condimentum nisl, quis aliquet nibh. Cras in ullamcorper nulla, quis ullamcorper urna. Cras nec ipsum ipsum. Integer quis laoreet velit. Duis ut tincidunt purus.",

	"Integer euismod ut sem nec cursus. Integer consectetur sit amet ipsum vel sodales. Sed feugiat ac ligula ut auctor. Sed congue tellus eget molestie dictum. Nunc tincidunt tellus malesuada massa auctor, eu malesuada massa lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque pellentesque sem dui, ac auctor dolor mattis vehicula. Morbi dictum nibh metus, quis laoreet felis iaculis ut. Praesent non ipsum ipsum. Morbi cursus, sem eu eleifend tincidunt, tortor quam blandit diam, vel scelerisque nibh arcu vitae metus."
];

const loremIpsum = (length) => {
	return (
		<>
			{paragraphs.slice(0, Math.min(length, 5)).map((p, i) => <p key={i}>{p}</p>)}
		</>
	)
}

export default loremIpsum;