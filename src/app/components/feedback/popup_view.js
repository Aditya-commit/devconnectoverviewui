import FeedbackListContainer from "./list_container";



const PopupFeedback = ({id}) => {

    return(
        <ol className="h-[500px] bg-[#fbfbfb] overflow-y-auto flex flex-col gap-y-3 py-2 editor_scroll mr-1">
            <FeedbackListContainer id={id} />
        </ol>
    )
}
export default PopupFeedback;