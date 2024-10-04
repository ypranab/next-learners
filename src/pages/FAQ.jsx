const FAQ = () => {
  return (
    <div>
      <section className="m-10">
        <h1 className="text-center text-3xl my-10">FAQ</h1>

        <div className="collapse collapse-arrow bg-base-200 mb-4">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What is React.js and Explain the concept of &quot;components&quot;
            in React?
          </div>
          <div className="collapse-content">
            <p>
              React.js is a JavaScript library used for building user
              interfaces. It uses a declarative paradigm, meaning you describe
              what you want the UI to look like, and React handles the updates.
              Components are the fundamental building blocks of React
              applications. They are reusable pieces of code that encapsulate a
              specific part of the UI. Each component has its own state and
              logic, and can be composed together to create complex interfaces.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 mb-4">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What is JSX in React, and how does it work?
          </div>
          <div className="collapse-content">
            <p>
              JSX is a syntax extension for JavaScript that lets you write
              HTML-like code in your React components. It's compiled into
              regular JavaScript before it's run.
              <br></br>
              How it works:
              <br></br>
              Compilation: When you write JSX code, it's not directly executed
              by the browser. Instead, it's transformed into regular JavaScript
              function calls before it's run. This transformation is typically
              done using Babel or a similar tool.
              <br></br>
              <br></br>React Elements: The transformed JSX code creates React
              elements. These elements are plain JavaScript objects that
              represent the UI you want to render.
              <br></br>
              <br></br>Rendering: React then uses these elements to update the
              DOM (Document Object Model) of your web page. This process is
              efficient, as React only updates the parts of the DOM that have
              actually changed.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 mb-4">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What is the Virtual DOM, and how does React use it to optimize
            performance?
          </div>
          <div className="collapse-content">
            <p>
              Virtual DOM: A lightweight, in-memory representation of the actual
              DOM. Created when a component is rendered. Updated when the
              component's state or props change.
              <br></br>How React uses it:
              <br></br>Diffing: React compares the previous and new virtual DOMs
              to identify the minimal set of changes needed to update the actual
              DOM.
              <br></br>
              <br></br>Batching: React groups multiple state updates into a
              single batch to minimize re-renders.
              <br></br>
              <br></br>Optimized updates: React efficiently updates the actual
              DOM only for the parts that have changed, reducing performance
              overhead. This process results in faster rendering and improved
              user experience, especially for large or complex applications.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 mb-4">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Explain the useState hook and provide an example of how it is used.
          </div>
          <div className="collapse-content">
            <p>
              useState is a React hook that allows you to manage state within
              functional components. It returns a pair of values: the current
              state value and a function to update that value. By using
              useState, we can manage state within functional components, making
              them more flexible and reusable.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 mb-4">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What is "state" in React, and how does it differ from props?
          </div>
          <div className="collapse-content">
            <p>
              State in React refers to the data or information that a component
              manages internally. It's used to store dynamic data that can
              change over time, such as user input, API responses, or internal
              calculations. When the state of a component changes, React
              re-renders the component to reflect the new data. Props, on the
              other hand, are data passed down from a parent component to its
              child components. They are immutable and cannot be modified
              directly within the child component. Props are typically used to
              configure or provide data to child components.
              <br></br>
              <br></br>Key differences:
              <br></br>
              <br></br>
              Ownership: State is owned and managed by the component itself,
              while props are passed down from a parent component.
              <br></br>Mutability: State can be modified within the component,
              while props are immutable.
              <br></br>Re-rendering: Changes to state trigger re-renders of the
              component, while changes to props can trigger re-renders if they
              affect the component's render logic.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 mb-4">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What is the purpose of the useEffect hook in React, and when would
            you use it?
          </div>
          <div className="collapse-content">
            <p>
              useEffect is a React hook that allows you to perform side effects
              in functional components. Side effects are actions that have an
              external impact, such as: Fetching data from an API Updating the
              DOM directly Setting up subscriptions or timers.
              <br></br>When to use useEffect:
              <br></br>
              <br></br>To fetch data: When you need to fetch data from an API
              and update your component's state based on the response.
              <br></br>
              <br></br>To update the DOM: When you need to directly manipulate
              the DOM, such as adding or removing elements. To set up
              subscriptions or timers: When you need to subscribe to external
              events or start timers that will trigger actions within your
              component.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
