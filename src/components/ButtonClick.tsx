const ButtonClick = () => {
    const handleClick = (ev : any) => {
        console.log("Button clicked", ev.screenX, ev.timeStamp);
    };

    return <button onClick={handleClick}>Click me!</button>;
};

export default ButtonClick;