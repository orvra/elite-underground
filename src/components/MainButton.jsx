function MainButton({text, position}) {
    return (
        <button className={`bg-white ${position} rounded-full w-40 transition ease-in-out delay-100 hover:bg-black hover:text-white duration-300`}>{text}</button>
    );
}

export default MainButton;