const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

// Strategy: 
// 1. Find all classes on h1, h2, h3, h4, h5, h6 and ensure they have 'font-heading'
html = html.replace(/<h([1-6])[^>]*class="([^"]*)"/g, (match, tag, classes) => {
    let newClasses = classes.split(' ');
    if (!newClasses.includes('font-heading')) {
        newClasses.push('font-heading');
    }
    
    // For h1 and h2, ensure tracking-tighter
    if (tag === '1' || tag === '2') {
        newClasses = newClasses.filter(c => !c.startsWith('tracking-'));
        newClasses.push('tracking-tighter');
    }
    // For h3, ensure tracking-tight
    if (tag === '3') {
        newClasses = newClasses.filter(c => !c.startsWith('tracking-'));
        newClasses.push('tracking-tight');
    }
    
    return `<h${tag} class="${newClasses.join(' ')}"`;
});

// 2. Find anything that looks like a small uppercase label (text-xs uppercase tracking-widest or similar) and ensure it has font-heading and font-bold
html = html.replace(/class="([^"]*uppercase[^"]*tracking-[a-z]+[^"]*)"/g, (match, classes) => {
    let newClasses = classes.split(' ');
    if (!newClasses.includes('font-heading')) {
        newClasses.push('font-heading');
    }
    if (!newClasses.includes('font-bold') && !newClasses.includes('font-extrabold') && !newClasses.includes('font-black')) {
        newClasses.push('font-bold');
    }
    return `class="${newClasses.join(' ')}"`;
});

// 3. Make sure the body text is leading-relaxed
// We can just add 'font-sans antialiased' to the body tag if not there
html = html.replace(/<body[^>]*class="([^"]*)"/, (match, classes) => {
    let newClasses = classes.split(' ');
    if (!newClasses.includes('font-sans')) newClasses.push('font-sans');
    if (!newClasses.includes('antialiased')) newClasses.push('antialiased');
    if (!newClasses.includes('text-slate-200')) newClasses.push('text-slate-200'); // Ensure base text color
    return match.replace(classes, newClasses.join(' '));
});

// 4. Look for <p> tags with text-lg or text-xl and ensure they have leading-relaxed
html = html.replace(/<p[^>]*class="([^"]*text-(lg|xl)[^"]*)"/g, (match, classes) => {
    let newClasses = classes.split(' ');
    if (!newClasses.includes('leading-relaxed')) {
        newClasses = newClasses.filter(c => !c.startsWith('leading-'));
        newClasses.push('leading-relaxed');
    }
    return match.replace(classes, newClasses.join(' '));
});

fs.writeFileSync('index.html', html);
console.log("Typography upgrade complete!");
