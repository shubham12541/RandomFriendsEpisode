import React from 'react';

const CustomButton = React.lazy(() => import("app2/CustomButton"));

const App = () => (
    <div>
        <h1>Root react component in App 1 </h1>
        <h2>App1</h2>
        <React.Suspense fallback="Loading remote button">
            <CustomButton />
        </React.Suspense>
    </div>
    
);

export default App;