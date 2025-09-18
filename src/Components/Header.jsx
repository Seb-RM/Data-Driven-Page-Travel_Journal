import globeIcon from "../assets/globe.png";

export default function Header() {
    return (
        <header>
            <img src={globeIcon} alt="Globe Icon"/>
            <h1>my travel journal.</h1>
        </header>
    );
}