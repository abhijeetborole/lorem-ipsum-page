function generateLorem() {
    const loremText = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Vivamus luctus eros aliquet convallis ultricies.",
        "Suspendisse potenti. Proin consectetur.",
        "Phasellus sit amet quam vitae odio varius volutpat.",
        "Curabitur ac leo nunc. Vestibulum et mauris vel ante."
    ];
    const randomText = loremText[Math.floor(Math.random() * loremText.length)];
    document.getElementById("lorem").innerText = randomText;
}
