const articles = [
    {
        id: 1,
        title: "Understanding React.js: A Comprehensive Guide",
        image: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg",
        content: "React.js is a powerful JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application efficiently.",
        fullContent: `React.js is a powerful JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application efficiently. With its virtual DOM and component-based architecture, React makes it easier to build complex applications while maintaining good performance.

        Key Features of React.js:
        1. Component-Based Architecture
        2. Virtual DOM for Performance
        3. One-Way Data Flow
        4. JSX Syntax
        5. Rich Ecosystem

        React's declarative approach makes your code more predictable and easier to debug. The library's ecosystem is vast, with numerous tools and libraries available to enhance your development experience.`,
        date: "March 15, 2024",
        category: "React",
        author: "John Doe",
        authorRole: "Senior React Developer",
        authorImage: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        id: 2,
        title: "Mastering React Context API",
        image: "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg",
        content: "The React Context API provides a way to share data between components without prop drilling. It's perfect for managing global state, themes, and user authentication.",
        fullContent: `The React Context API provides a way to share data between components without prop drilling. It's perfect for managing global state, themes, and user authentication.

        Understanding Context API:
        1. Creating Context
        2. Provider Component
        3. Consumer Component
        4. useContext Hook
        5. Best Practices

        Learn how to implement and use Context API effectively in your React applications. We'll cover common use cases, performance considerations, and how to avoid common pitfalls.`,
        date: "March 14, 2024",
        category: "React",
        author: "Sarah Smith",
        authorRole: "React Architect",
        authorImage: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        id: 3,
        title: "Understanding useRef Hook in React",
        image: "https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg",
        content: "The useRef hook is a powerful tool in React that allows you to create mutable references that persist across renders.",
        fullContent: `The useRef hook is a powerful tool in React that allows you to create mutable references that persist across renders. It's commonly used for accessing DOM elements, storing previous values, and managing focus, text selection, or media playback.

        Common useRef Use Cases:
        1. DOM Element References
        2. Previous Value Storage
        3. Focus Management
        4. Media Playback Control
        5. Animation References

        This article will guide you through practical examples and best practices for using useRef in your React applications.`,
        date: "March 13, 2024",
        category: "React Hooks",
        author: "Mike Johnson",
        authorRole: "Frontend Developer",
        authorImage: "https://randomuser.me/api/portraits/men/2.jpg"
    }
];

export const getArticleById = (id) => {
    return articles.find(article => article.id === parseInt(id));
};

export default articles; 