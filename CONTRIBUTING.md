# 🤝 Contributing to Super Breakout Loading Animation

First off, thank you for considering contributing to the Super Breakout Loading Animation! It's people like you that make this project better for everyone.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Style Guidelines](#style-guidelines)
- [Pull Request Process](#pull-request-process)

---

## Code of Conduct

This project and everyone participating in it is governed by our commitment to a welcoming and inclusive environment. By participating, you are expected to uphold this standard. Please be respectful and constructive in all interactions.

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML, CSS, and JavaScript
- Git installed on your machine
- A text editor or IDE

### Setting Up Your Development Environment

1. **Fork the repository**
   
   Click the "Fork" button at the top right of the repository page.

2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR-USERNAME/Super-Breakout-Loading-Animation.
   cd Super-Breakout-Loading-Animation.
   ```

3. **Set up upstream remote**

   ```bash
   git remote add upstream https://github.com/melancholic-ksm/Super-Breakout-Loading-Animation.
   ```

4. **Create a branch for your feature**

   ```bash
   git checkout -b feature/your-feature-name
   ```

### Running the Project Locally

Since this is a pure HTML/CSS/JavaScript project, you can simply open the HTML files in your browser:

```bash
# Using Python's built-in server (recommended for testing)
python -m http.server 8000
# Then open http://localhost:8000

# Or using Node.js http-server
npx http-server
```

---

## How Can I Contribute?

### Reporting Bugs

Before creating a bug report, please check existing issues to see if the problem has already been reported.

When creating a bug report, include:

- **Clear title** describing the issue
- **Steps to reproduce** the behavior
- **Expected behavior** vs **actual behavior**
- **Screenshots or GIFs** if applicable
- **Browser and OS** information
- **Any error messages** from the console

**Bug Report Template:**

```markdown
## Bug Description
A clear description of what the bug is.

## Steps to Reproduce
1. Open '...'
2. Click on '...'
3. See error

## Expected Behavior
What you expected to happen.

## Actual Behavior
What actually happened.

## Environment
- Browser: [e.g., Chrome 120]
- OS: [e.g., Windows 11]
- Version: [e.g., v2.0]

## Screenshots
If applicable, add screenshots.

## Console Errors
Any JavaScript errors from the browser console.
```

### Suggesting Features

Feature suggestions are tracked as GitHub issues. When creating a feature request:

- **Use a clear title** that describes the feature
- **Provide a detailed description** of the proposed feature
- **Explain the use case** and why it would be valuable
- **Include mockups or examples** if possible

**Feature Request Template:**

```markdown
## Feature Description
A clear description of what you want to add.

## Use Case
Explain why this feature would be useful.

## Proposed Solution
How you think this could be implemented.

## Alternatives Considered
Any alternative solutions you've thought about.

## Additional Context
Any other information or screenshots.
```

### Contributing Code

#### Good First Issues

Look for issues labeled `good first issue` - these are great starting points for new contributors.

#### Types of Contributions We're Looking For

- 🐛 **Bug fixes**
- ✨ **New features**
- 📝 **Documentation improvements**
- 🎨 **UI/UX improvements**
- ⚡ **Performance optimizations**
- 🧪 **Test additions**

---

## Style Guidelines

### HTML

- Use 4 spaces for indentation
- Use semantic HTML5 elements where appropriate
- Include `alt` attributes for images
- Include `aria` labels for accessibility

```html
<!-- Good -->
<canvas id="breakout" width="823" height="230" role="img" aria-label="Loading animation"></canvas>

<!-- Avoid -->
<canvas id=breakout width=823 height=230></canvas>
```

### CSS

- Use 4 spaces for indentation
- Use meaningful class names
- Group related properties together
- Add comments for complex styles

```css
/* Good */
.loading-container {
    /* Positioning */
    display: flex;
    justify-content: center;
    align-items: center;
    
    /* Sizing */
    width: 100%;
    height: 100vh;
    
    /* Appearance */
    background: #f3f3eb;
}

/* Avoid */
.lc{display:flex;justify-content:center;align-items:center;width:100%;height:100vh;background:#f3f3eb;}
```

### JavaScript

- Use 4 spaces for indentation
- Use `const` for constants, `let` for variables
- Use meaningful variable and function names
- Add JSDoc comments for functions
- Keep functions focused and single-purpose

```javascript
// Good
/**
 * Spawns particle effects at the specified position
 * @param {number} x - X coordinate
 * @param {number} y - Y coordinate
 * @param {string} color - Particle color
 * @param {number} count - Number of particles
 */
function spawnParticles(x, y, color, count) {
    const angle = Math.random() * 2 * Math.PI;
    const speed = 1 + Math.random();
    // ...
}

// Avoid
function sp(x,y,c,n){var a=Math.random()*2*Math.PI;var s=1+Math.random();}
```

### Commit Messages

Follow the conventional commits format:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**

```bash
feat(particles): add rainbow particle effect on combo breaks

fix(paddle): prevent paddle from going off-screen on mobile

docs(readme): add installation instructions for npm users

style(loading): improve code indentation and formatting
```

---

## Pull Request Process

### Before Submitting

1. **Ensure your code follows the style guidelines**
2. **Test your changes** in multiple browsers
3. **Update documentation** if needed
4. **Keep changes focused** - one feature/fix per PR

### Creating a Pull Request

1. **Push your changes** to your fork

   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create the Pull Request** on GitHub

3. **Fill out the PR template** completely

**Pull Request Template:**

```markdown
## Description
Describe your changes here.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## How Has This Been Tested?
Describe how you tested your changes.

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have commented my code where needed
- [ ] I have updated the documentation
- [ ] My changes generate no new warnings
- [ ] I have tested in multiple browsers

## Screenshots (if applicable)
Add screenshots of your changes.
```

### After Submitting

1. **Respond to review feedback** promptly
2. **Make requested changes** in new commits
3. **Keep the conversation going** if there are questions

### Review Process

- All PRs require at least one approval
- Maintainers may request changes
- Once approved, your PR will be merged

---

## Development Tips

### Testing Across Browsers

Test your changes in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

### Performance Testing

Use browser developer tools to:
- Check for memory leaks
- Monitor frame rate (target: 60fps)
- Profile JavaScript execution

### Debugging

```javascript
// Add temporary debug logging
console.log('Ball position:', x, y);
console.log('Paddle mode:', paddleMode);

// Use breakpoints in browser DevTools
debugger;
```

---

## Recognition

Contributors will be:
- Listed in the project's README
- Thanked in release notes
- Part of making something awesome! 🎮

---

## Questions?

Feel free to:
- Open an issue with your question
- Start a discussion on GitHub Discussions
- Reach out to the maintainers

Thank you for contributing! 🙏
