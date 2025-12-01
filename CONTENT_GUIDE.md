# Content Creator Guide: GitHub Web Interface

## 🚀 Getting Started

### Step 1: Access the Repository
1. Go to: https://github.com/Kaif223/AstroDocs
2. Sign in to your GitHub account
3. You should see the repository homepage

### Step 2: Navigate to Content
1. Click on the `src` folder
2. Click on the `content` folder  
3. Click on the `docs` folder
4. You'll see all the documentation files here

## 📝 Creating New Content

### Option A: Create a New File
1. In the `docs` folder, click the **"Add file"** button
2. Select **"Create new file"**
3. Name your file (e.g., `my-new-guide.mdx`)
4. Add your content using Markdown syntax
5. Scroll down to commit the file

### Option B: Edit Existing Content
1. Click on any `.mdx` file (e.g., `getting-started.mdx`)
2. Click the **pencil icon (✏️)** to edit
3. Make your changes
4. Scroll down to commit changes

## ✍️ Writing in Markdown

### Basic Formatting
```markdown
# Main Heading
## Sub Heading
### Small Heading

**Bold text**
*Italic text*

- Bullet point 1
- Bullet point 2

1. Numbered item 1
2. Numbered item 2

[Link text](https://example.com)
```

### Adding Images
1. First upload image to `public/images/` folder
2. Reference it: `![Alt text](/images/your-image.png)`

### Code Blocks
```markdown
```javascript
console.log("Hello World!");
```
```

## 💾 Saving Your Work

### Commit Changes
1. Scroll to bottom of edit page
2. Add a **commit message** (e.g., "Add troubleshooting guide")
3. Choose **"Create a new branch for this commit and start a pull request"**
4. Click **"Propose changes"**
5. On the next page, click **"Create pull request"**

### Direct Commit (for trusted contributors)
1. Add commit message
2. Select **"Commit directly to the main branch"** 
3. Click **"Commit changes"**

## 🔄 Review Process

### Pull Requests (Recommended)
- Creates a review process
- Others can comment and suggest changes
- Keeps main content stable
- Merge when approved

### Direct Commits
- Changes go live immediately
- Use only for small fixes
- Requires repository permissions

## 📁 Content Organization

### ✨ **Easy Content Creation (No Config Needed!)**

**🎯 For Automatic Navigation**: Just put your files in these folders and they'll appear automatically:

#### **Guides Folder** (`src/content/docs/guides/`)
- **Purpose**: Step-by-step tutorials, how-to guides  
- **Auto-appears**: In "Guides" section of navigation
- **Example**: Create `guides/my-tutorial.mdx` → Automatically shows up!

#### **Reference Folder** (`src/content/docs/reference/`)  
- **Purpose**: API docs, technical references, quick lookup
- **Auto-appears**: In "Reference" section of navigation
- **Example**: Create `reference/api-guide.mdx` → Automatically shows up!

### 📋 **Manual Navigation (Requires Tech Setup)**

#### **Main Documentation** (`src/content/docs/`)
- `index.mdx` - Homepage (don't edit)
- `getting-started.mdx` - Getting started guide
- `setup.mdx` - Setup instructions  
- `faq.mdx` - Frequently asked questions
- ⚠️ **Note**: New files here need to be added to config manually

## 🎯 **Content Creator Quick Guide**

### ✅ **Easy Way (Recommended for Non-Technical Users)**
1. **Create your file** in `guides/` or `reference/` folder
2. **That's it!** - No configuration needed
3. **File automatically appears** in navigation

### ❌ **Hard Way (Avoid Unless Technical)**  
1. Create file in main `docs/` folder
2. Edit `astro.config.mjs` file 
3. Add sidebar configuration
4. Commit both changes

## 🎨 Content Templates

### Basic Page Template
```markdown
---
title: "Your Page Title"
description: "Brief description of the page content"
---

# Your Page Title

## Introduction
Brief introduction to the topic.

## Main Content
Your main content here.

## Conclusion
Wrap up your content.
```

### Guide Template
```markdown
---
title: "How to: [Task Name]"
description: "Step-by-step guide for [specific task]"
---

# How to: [Task Name]

## Prerequisites
What users need before starting.

## Step 1: [First Step]
Detailed instructions for the first step.

## Step 2: [Second Step]  
Continue with clear, numbered steps.

## Troubleshooting
Common issues and solutions.
```

## ⚠️ Important Tips

### Do's
- ✅ Use clear, descriptive commit messages
- ✅ Preview your changes before committing
- ✅ Use proper Markdown formatting
- ✅ Include alt text for images
- ✅ Create pull requests for major changes

### Don'ts
- ❌ Don't edit multiple files in one commit without testing
- ❌ Don't use spaces in file names (use hyphens: `my-guide.mdx`)
- ❌ Don't forget to add file extensions (.mdx)
- ❌ Don't commit broken Markdown syntax

## 🆘 Getting Help

### Preview Your Changes
- GitHub shows a preview tab when editing
- Use it to check formatting before committing

### If Something Goes Wrong
- Contact the repository maintainer
- Create an issue describing the problem
- Don't panic - everything in Git can be undone

### Useful Resources
- [Markdown Guide](https://www.markdownguide.org/basic-syntax/)
- [GitHub Documentation](https://docs.github.com/en/github/writing-on-github)
