# ReactFlix
Netflix clone using react


### There are two types of dependencies
1. Dev
    - For development
2. Normal
    - For production

npm install -D
here -D means dev dependency.


### npx parcel index.html
- Dev build
- runs local server on localhost:1234
- HMR Hot Module Replacement (Hot Realoading)
- File Watching Algorithm written in cpp
- Cache file for faster build
- Image Optimization
- Minification of files
- Bundling
- Compress files
- Consistent Hashing
- Code Splitting
- Differential Bundling - support for older browsers
- Diagnosting 
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and production(npx parcel build index.html) bundles



### react hook - normal js function
- whenever state veriable changes react re-render component
- Reconciliation Algorithm (React Fiber)
- Virtual DOM - is representation of actual DOM
    - React.createElement

- Two main hooks 
- useState
- useEffect


Two types of routing 
- Client side
- Server side

React Class component life cycle:
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

return function from useEffect work as unmounting call back

Chunking, Code Splitting, Dynamic Bundling, Lazzy Loading< On Demand Loading



### CreateContext UseContext

- data we want to use at multiple places but dont want to pass it through props, use context
