// ReactElement(object) => HTML(Browser Understands)

const parent = React.createElement(
    "div",
    {id: "parent"}, [
        React.createElement(
            "div",
            {id: "child"},
            [
            React.createElement("h1", {}, "i'm a child"),
            React.createElement("h2", {}, "i am a child 2")
        ]
    ),
    React.createElement(
        "div",
        {id: "child2"},
        [
        React.createElement("h1", {}, "i'm a child"),
        React.createElement("h2", {}, "i am a child 2")
    ]),
    ]
);



console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

