# Parallax Website

This is a simple Parallax website built using **HTML**, **CSS**, and **JavaScript**. The website features a parallax scrolling effect where various elements like images and text move at different speeds, creating a dynamic user experience.

## Features

- Parallax scrolling effect on the homepage.
- Responsive design.
- Simple and clean layout.
- Animated navigation bar with hover effects.

## Technologies Used

- **HTML**: Markup language to structure the website.
- **CSS**: Styling for layout, design, and responsive behavior.
- **JavaScript**: Adds parallax scrolling effect.

## Project Structure
```
. ├── assets/ # Folder containing images used for parallax effect 
│ ├── background.jpg # Background image 
│ ├── tree1.png # Tree image 1 
│ ├── tree2.png # Tree image 2 
│ ├── bush3.png # Bush image 1 
│ ├── bush4.png # Bush image 2 
│ └── (other images you may add) 
├── index.html # Main HTML file 
├── style.css # CSS file for styling 
└── script.js # JavaScript file for parallax effect
```

## How It Works

### Parallax Effect
The parallax effect is achieved by modifying the position of elements based on the scroll position of the user. As the user scrolls, different layers like trees, bushes, and text move at different speeds, creating a 3D depth illusion.

The **JavaScript** code listens for the scroll event and adjusts the position of elements like trees, bushes, and the title based on the `scrollY` value.

### HTML Structure
The HTML file contains sections for the header, parallax effect area, and an about section. The parallax images are placed within the `.home` section, and the navigation links are styled with hover animations.

### CSS Styling
The CSS file handles layout, styling, and responsive design. Elements are positioned absolutely to ensure proper layering for the parallax effect.

### JavaScript
The JavaScript code controls the parallax effect by adjusting the margins and positions of the elements as the page is scrolled.

## How to Use

1. **Clone the repository**:
   ```bash
   git clone https://github.com/prabinbehera1/parallax-website.git
   ```
2. Open the project in your code editor.

3. Add your images inside the assets folder.

4. Run the project: Open the index.html file in your browser to view the website.

## Future Improvements

- Add more interactive elements to enhance the parallax effect.
- Improve responsiveness across different devices.
- Add animations to navigation and scrolling behavior.
- Expand to multiple pages with consistent parallax features.
