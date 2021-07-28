import {BeatLoader} from 'react-spinners';



const Loading = (props) => {
    return(props.loading?
        <div id="loading_screen">
            <img id="loading_gif" src={"images/loading.gif"} alt="loading..." />
            <BeatLoader color={"white"} loading={true} size={50} margin={40} />
        </div>:
        <></>
    );
}

export default Loading;