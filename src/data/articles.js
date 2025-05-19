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
    },
    {
        id: 4,
        title: "Building Responsive UIs with Tailwind CSS",
        image: "https://img.freepik.com/free-vector/responsive-web-design-concept-illustration_114360-1566.jpg",
        content: "Learn how to create beautiful, responsive user interfaces using Tailwind CSS. This utility-first CSS framework makes it easy to build modern designs.",
        fullContent: `Tailwind CSS is a utility-first CSS framework that makes it easy to build modern, responsive user interfaces. In this comprehensive guide, we'll explore how to use Tailwind CSS effectively in your projects.

        Key Topics:
        1. Setting up Tailwind CSS
        2. Understanding utility classes
        3. Responsive design patterns
        4. Custom configuration
        5. Best practices and tips

        Learn how to create beautiful, responsive designs quickly and efficiently with Tailwind CSS.`,
        date: "March 12, 2024",
        category: "CSS",
        author: "Emily Chen",
        authorRole: "UI/UX Developer",
        authorImage: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        id: 5,
        title: "State Management with Redux Toolkit",
        image: "https://img.freepik.com/free-vector/app-development-concept-illustration_114360-1350.jpg",
        content: "Redux Toolkit simplifies Redux development with built-in utilities and best practices. Learn how to manage application state effectively.",
        fullContent: `Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development. It helps you write Redux logic with less boilerplate and better practices.

        Key Features:
        1. configureStore
        2. createSlice
        3. createAsyncThunk
        4. createEntityAdapter
        5. RTK Query

        This guide will show you how to implement Redux Toolkit in your React applications and manage state effectively.`,
        date: "March 11, 2024",
        category: "State Management",
        author: "David Wilson",
        authorRole: "Full Stack Developer",
        authorImage: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        id: 6,
        title: "React Performance Optimization Techniques",
        image: "https://img.freepik.com/free-vector/performance-concept-illustration_114360-1506.jpg",
        content: "Discover essential techniques to optimize your React applications for better performance and user experience.",
        fullContent: `Performance optimization is crucial for creating smooth and responsive React applications. This article covers various techniques to improve your app's performance.

        Optimization Techniques:
        1. Code Splitting
        2. Memoization
        3. Virtualization
        4. Lazy Loading
        5. Performance Monitoring

        Learn how to identify and fix performance bottlenecks in your React applications.`,
        date: "March 10, 2024",
        category: "Performance",
        author: "Lisa Brown",
        authorRole: "Performance Engineer",
        authorImage: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
        id: 7,
        title: "TypeScript with React: A Complete Guide",
        image: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg",
        content: "Learn how to use TypeScript with React to build type-safe applications and catch errors early in development.",
        fullContent: `TypeScript adds static typing to JavaScript, making it easier to build and maintain large-scale applications. This guide shows you how to use TypeScript effectively with React.

        Topics Covered:
        1. Setting up TypeScript with React
        2. Type definitions
        3. Props and state typing
        4. Custom hooks with TypeScript
        5. Best practices

        Master TypeScript integration with React and write more maintainable code.`,
        date: "March 9, 2024",
        category: "TypeScript",
        author: "Alex Turner",
        authorRole: "TypeScript Developer",
        authorImage: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
        id: 8,
        title: "Building Accessible React Applications",
        image: "https://img.freepik.com/free-vector/accessibility-concept-illustration_114360-1936.jpg",
        content: "Learn how to create accessible React applications that work for everyone, including users with disabilities.",
        fullContent: `Web accessibility is crucial for creating inclusive applications. This guide covers how to build accessible React applications that work for all users.

        Key Areas:
        1. Semantic HTML
        2. ARIA attributes
        3. Keyboard navigation
        4. Screen reader support
        5. Testing accessibility

        Make your React applications accessible to everyone with these best practices.`,
        date: "March 8, 2024",
        category: "Accessibility",
        author: "Maria Garcia",
        authorRole: "Accessibility Specialist",
        authorImage: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
        id: 9,
        title: "React Testing Strategies",
        image: "https://img.freepik.com/free-vector/testing-concept-illustration_114360-1593.jpg",
        content: "Master different testing strategies for React applications, including unit testing, integration testing, and end-to-end testing.",
        fullContent: `Testing is essential for building reliable React applications. This comprehensive guide covers various testing strategies and tools.

        Testing Approaches:
        1. Unit Testing with Jest
        2. Component Testing with React Testing Library
        3. Integration Testing
        4. End-to-End Testing with Cypress
        5. Test-Driven Development

        Learn how to write effective tests for your React applications.`,
        date: "March 7, 2024",
        category: "Testing",
        author: "James Wilson",
        authorRole: "QA Engineer",
        authorImage: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
        id: 10,
        title: "React Server Components: The Future of React",
        image: "https://img.freepik.com/free-vector/server-room-rack-illustration_107791-1783.jpg",
        content: "Explore React Server Components and how they're changing the way we build React applications.",
        fullContent: `React Server Components are a new way to build React applications that combine the best of server and client rendering.

        Key Concepts:
        1. Server Components vs Client Components
        2. Data Fetching
        3. Streaming
        4. Performance Benefits
        5. Migration Strategies

        Understand how Server Components can improve your application's performance and user experience.`,
        date: "March 6, 2024",
        category: "React",
        author: "Sophie Anderson",
        authorRole: "React Specialist",
        authorImage: "https://randomuser.me/api/portraits/women/5.jpg"
    },
    {
        id: 11,
        title: "Building Micro-Frontends with React",
        image: "https://img.freepik.com/free-vector/microservices-illustration-concept_114360-1531.jpg",
        content: "Learn how to implement micro-frontend architecture using React for scalable and maintainable applications.",
        fullContent: `Micro-frontends allow teams to work independently on different parts of a frontend application. This guide shows how to implement micro-frontends with React.

        Implementation Strategies:
        1. Module Federation
        2. Build-time integration
        3. Runtime integration
        4. Communication patterns
        5. Deployment strategies

        Master micro-frontend architecture with React and improve your team's productivity.`,
        date: "March 5, 2024",
        category: "Architecture",
        author: "Robert Chen",
        authorRole: "Solution Architect",
        authorImage: "https://randomuser.me/api/portraits/men/6.jpg"
    },
    {
        id: 12,
        title: "React Animation Techniques",
        image: "https://img.freepik.com/free-vector/animation-concept-illustration_114360-1815.jpg",
        content: "Discover various animation techniques in React, from CSS transitions to Framer Motion.",
        fullContent: `Animations can greatly enhance user experience in React applications. This guide covers different animation techniques and libraries.

        Animation Approaches:
        1. CSS Transitions
        2. CSS Animations
        3. Framer Motion
        4. React Spring
        5. Performance Considerations

        Learn how to create smooth and engaging animations in your React applications.`,
        date: "March 4, 2024",
        category: "Animation",
        author: "Emma Thompson",
        authorRole: "UI Developer",
        authorImage: "https://randomuser.me/api/portraits/women/6.jpg"
    },
    {
        id: 13,
        title: "React Security Best Practices",
        image: "https://img.freepik.com/free-vector/security-concept-illustration_114360-1532.jpg",
        content: "Learn essential security practices for React applications to protect against common vulnerabilities.",
        fullContent: `Security is crucial for any web application. This guide covers essential security practices for React applications.

        Security Topics:
        1. XSS Prevention
        2. CSRF Protection
        3. Secure Authentication
        4. Data Validation
        5. Dependency Management

        Implement these security best practices to protect your React applications.`,
        date: "March 3, 2024",
        category: "Security",
        author: "Michael Brown",
        authorRole: "Security Engineer",
        authorImage: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
        id: 14,
        title: "React Design Patterns",
        image: "https://img.freepik.com/free-vector/design-concept-illustration_114360-585.jpg",
        content: "Explore common design patterns in React and learn how to implement them effectively.",
        fullContent: `Design patterns help solve common problems in React applications. This guide covers essential React design patterns.

        Key Patterns:
        1. Higher-Order Components
        2. Render Props
        3. Compound Components
        4. Custom Hooks
        5. Context API Patterns

        Master these design patterns to write more maintainable React code.`,
        date: "March 2, 2024",
        category: "Design Patterns",
        author: "Sarah Johnson",
        authorRole: "Senior Developer",
        authorImage: "https://randomuser.me/api/portraits/women/7.jpg"
    },
    {
        id: 15,
        title: "React Performance Monitoring",
        image: "https://img.freepik.com/free-vector/monitoring-concept-illustration_114360-1506.jpg",
        content: "Learn how to monitor and analyze performance in React applications using various tools and techniques.",
        fullContent: `Performance monitoring is essential for maintaining high-quality React applications. This guide covers tools and techniques for monitoring React performance.

        Monitoring Tools:
        1. React DevTools
        2. Performance Profiler
        3. Lighthouse
        4. Web Vitals
        5. Custom Metrics

        Learn how to identify and fix performance issues in your React applications.`,
        date: "March 1, 2024",
        category: "Performance",
        author: "David Lee",
        authorRole: "Performance Engineer",
        authorImage: "https://randomuser.me/api/portraits/men/8.jpg"
    },
    {
        id: 16,
        title: "React Error Handling Strategies",
        image: "https://img.freepik.com/free-vector/error-concept-illustration_114360-1811.jpg",
        content: "Master error handling in React applications with effective strategies and best practices.",
        fullContent: `Proper error handling is crucial for building reliable React applications. This guide covers various error handling strategies.

        Error Handling Topics:
        1. Error Boundaries
        2. Try-Catch Blocks
        3. Error Logging
        4. User Feedback
        5. Recovery Strategies

        Implement robust error handling in your React applications.`,
        date: "February 29, 2024",
        category: "Error Handling",
        author: "Lisa Wang",
        authorRole: "Software Engineer",
        authorImage: "https://randomuser.me/api/portraits/women/8.jpg"
    },
    {
        id: 17,
        title: "React Internationalization",
        image: "https://img.freepik.com/free-vector/internationalization-concept-illustration_114360-1936.jpg",
        content: "Learn how to implement internationalization in React applications to support multiple languages.",
        fullContent: `Internationalization (i18n) is essential for global applications. This guide covers how to implement i18n in React.

        i18n Topics:
        1. Translation Management
        2. Date and Number Formatting
        3. RTL Support
        4. Language Switching
        5. Best Practices

        Make your React applications accessible to users worldwide.`,
        date: "February 28, 2024",
        category: "Internationalization",
        author: "John Smith",
        authorRole: "Frontend Developer",
        authorImage: "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
        id: 18,
        title: "React Form Handling",
        image: "https://img.freepik.com/free-vector/form-concept-illustration_114360-518.jpg",
        content: "Master form handling in React applications with modern libraries and best practices.",
        fullContent: `Form handling is a common requirement in React applications. This guide covers modern approaches to form handling.

        Form Topics:
        1. Controlled Components
        2. Form Libraries
        3. Validation
        4. Error Handling
        5. Best Practices

        Learn how to create robust forms in your React applications.`,
        date: "February 27, 2024",
        category: "Forms",
        author: "Emily Davis",
        authorRole: "UI Developer",
        authorImage: "https://randomuser.me/api/portraits/women/9.jpg"
    },
    {
        id: 19,
        title: "React Data Visualization",
        image: "https://img.freepik.com/free-vector/data-visualization-concept-illustration_114360-1815.jpg",
        content: "Learn how to create effective data visualizations in React applications using popular libraries.",
        fullContent: `Data visualization is crucial for presenting complex data effectively. This guide covers popular visualization libraries for React.

        Visualization Topics:
        1. Chart Libraries
        2. Interactive Graphs
        3. Real-time Updates
        4. Custom Visualizations
        5. Performance Optimization

        Create engaging data visualizations in your React applications.`,
        date: "February 26, 2024",
        category: "Data Visualization",
        author: "Michael Chen",
        authorRole: "Data Visualization Specialist",
        authorImage: "https://randomuser.me/api/portraits/men/10.jpg"
    },
    {
        id: 20,
        title: "React Authentication Patterns",
        image: "https://img.freepik.com/free-vector/authentication-concept-illustration_114360-1936.jpg",
        content: "Explore different authentication patterns and implement secure authentication in React applications.",
        fullContent: `Authentication is a critical part of many React applications. This guide covers various authentication patterns and implementations.

        Authentication Topics:
        1. JWT Authentication
        2. OAuth Integration
        3. Session Management
        4. Protected Routes
        5. Security Best Practices

        Implement secure authentication in your React applications.`,
        date: "February 25, 2024",
        category: "Authentication",
        author: "Sarah Wilson",
        authorRole: "Security Developer",
        authorImage: "https://randomuser.me/api/portraits/women/10.jpg"
    },
    {
        id: 21,
        title: "React File Upload Strategies",
        image: "https://img.freepik.com/free-vector/file-upload-concept-illustration_114360-1815.jpg",
        content: "Learn how to implement efficient file upload functionality in React applications.",
        fullContent: `File uploads are common in modern web applications. This guide covers various file upload strategies in React.

        Upload Topics:
        1. Drag and Drop
        2. Progress Tracking
        3. File Validation
        4. Chunked Uploads
        5. Error Handling

        Implement robust file upload functionality in your React applications.`,
        date: "February 24, 2024",
        category: "File Handling",
        author: "David Brown",
        authorRole: "Full Stack Developer",
        authorImage: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
        id: 22,
        title: "React SEO Best Practices",
        image: "https://img.freepik.com/free-vector/seo-concept-illustration_114360-1815.jpg",
        content: "Learn how to optimize React applications for search engines and improve SEO performance.",
        fullContent: `SEO is crucial for web applications. This guide covers best practices for optimizing React applications for search engines.

        SEO Topics:
        1. Server-Side Rendering
        2. Meta Tags
        3. Dynamic Routes
        4. Performance Optimization
        5. Analytics Integration

        Improve your React application's search engine visibility.`,
        date: "February 23, 2024",
        category: "SEO",
        author: "Emma Wilson",
        authorRole: "SEO Specialist",
        authorImage: "https://randomuser.me/api/portraits/women/11.jpg"
    },
    {
        id: 23,
        title: "React WebSocket Integration",
        image: "https://img.freepik.com/free-vector/websocket-concept-illustration_114360-1815.jpg",
        content: "Learn how to implement real-time communication in React applications using WebSockets.",
        fullContent: `WebSockets enable real-time communication in web applications. This guide covers WebSocket integration in React.

        WebSocket Topics:
        1. Connection Management
        2. Event Handling
        3. Error Recovery
        4. Performance Optimization
        5. Security Considerations

        Implement real-time features in your React applications.`,
        date: "February 22, 2024",
        category: "WebSockets",
        author: "James Chen",
        authorRole: "Backend Developer",
        authorImage: "https://randomuser.me/api/portraits/men/12.jpg"
    },
    {
        id: 24,
        title: "React Progressive Web Apps",
        image: "https://img.freepik.com/free-vector/pwa-concept-illustration_114360-1815.jpg",
        content: "Learn how to convert React applications into Progressive Web Apps (PWAs) for better user experience.",
        fullContent: `PWAs combine the best of web and mobile applications. This guide covers how to convert React applications into PWAs.

        PWA Topics:
        1. Service Workers
        2. Offline Support
        3. Push Notifications
        4. App Manifest
        5. Performance Optimization

        Create engaging PWAs with React.`,
        date: "February 21, 2024",
        category: "PWA",
        author: "Lisa Anderson",
        authorRole: "Mobile Developer",
        authorImage: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
        id: 25,
        title: "React Code Splitting",
        image: "https://img.freepik.com/free-vector/code-splitting-concept-illustration_114360-1815.jpg",
        content: "Learn how to implement code splitting in React applications for better performance.",
        fullContent: `Code splitting is essential for optimizing React applications. This guide covers various code splitting techniques.

        Splitting Topics:
        1. Route-based Splitting
        2. Component-based Splitting
        3. Dynamic Imports
        4. Preloading
        5. Performance Monitoring

        Optimize your React application's loading performance.`,
        date: "February 20, 2024",
        category: "Performance",
        author: "Michael Wilson",
        authorRole: "Performance Engineer",
        authorImage: "https://randomuser.me/api/portraits/men/13.jpg"
    },
    {
        id: 26,
        title: "React Error Boundaries",
        image: "https://img.freepik.com/free-vector/error-boundary-concept-illustration_114360-1815.jpg",
        content: "Learn how to implement error boundaries in React applications for better error handling.",
        fullContent: `Error boundaries are React components that catch JavaScript errors. This guide covers how to implement error boundaries effectively.

        Error Boundary Topics:
        1. Implementation
        2. Error Recovery
        3. Fallback UI
        4. Error Logging
        5. Best Practices

        Implement robust error handling in your React applications.`,
        date: "February 19, 2024",
        category: "Error Handling",
        author: "Sarah Brown",
        authorRole: "Software Engineer",
        authorImage: "https://randomuser.me/api/portraits/women/13.jpg"
    },
    {
        id: 27,
        title: "React Custom Hooks",
        image: "https://img.freepik.com/free-vector/custom-hooks-concept-illustration_114360-1815.jpg",
        content: "Learn how to create and use custom hooks in React applications for better code organization.",
        fullContent: `Custom hooks help share logic between components. This guide covers how to create and use custom hooks effectively.

        Custom Hook Topics:
        1. Hook Creation
        2. State Management
        3. Side Effects
        4. Testing
        5. Best Practices

        Create reusable logic with custom hooks in React.`,
        date: "February 18, 2024",
        category: "React Hooks",
        author: "David Wilson",
        authorRole: "React Developer",
        authorImage: "https://randomuser.me/api/portraits/men/14.jpg"
    },
    {
        id: 28,
        title: "React Performance Profiling",
        image: "https://img.freepik.com/free-vector/performance-profiling-concept-illustration_114360-1815.jpg",
        content: "Learn how to profile and optimize React applications for better performance.",
        fullContent: `Performance profiling helps identify bottlenecks in React applications. This guide covers various profiling techniques.

        Profiling Topics:
        1. React Profiler
        2. Performance Metrics
        3. Memory Leaks
        4. Rendering Optimization
        5. Best Practices

        Optimize your React application's performance.`,
        date: "February 17, 2024",
        category: "Performance",
        author: "Emma Chen",
        authorRole: "Performance Engineer",
        authorImage: "https://randomuser.me/api/portraits/women/14.jpg"
    },
    {
        id: 29,
        title: "React Testing Library",
        image: "https://img.freepik.com/free-vector/testing-library-concept-illustration_114360-1815.jpg",
        content: "Learn how to write effective tests for React applications using React Testing Library.",
        fullContent: `React Testing Library helps write better tests for React applications. This guide covers testing best practices.

        Testing Topics:
        1. Component Testing
        2. User Interactions
        3. Async Testing
        4. Mocking
        5. Best Practices

        Write better tests for your React applications.`,
        date: "February 16, 2024",
        category: "Testing",
        author: "James Wilson",
        authorRole: "QA Engineer",
        authorImage: "https://randomuser.me/api/portraits/men/15.jpg"
    },
    {
        id: 30,
        title: "React Deployment Strategies",
        image: "https://img.freepik.com/free-vector/deployment-concept-illustration_114360-1815.jpg",
        content: "Learn different deployment strategies for React applications and best practices.",
        fullContent: `Deployment is a crucial part of the development process. This guide covers various deployment strategies for React applications.

        Deployment Topics:
        1. Build Optimization
        2. CI/CD Integration
        3. Environment Configuration
        4. Monitoring
        5. Best Practices

        Deploy your React applications effectively.`,
        date: "February 15, 2024",
        category: "Deployment",
        author: "Lisa Davis",
        authorRole: "DevOps Engineer",
        authorImage: "https://randomuser.me/api/portraits/women/15.jpg"
    }
];

export const getArticleById = (id) => {
    return articles.find(article => article.id === parseInt(id));
};

export default articles; 