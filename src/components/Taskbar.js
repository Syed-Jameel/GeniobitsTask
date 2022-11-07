// import { Taskheader } from "./Taskheader";
import { Tasktable } from "./Tasktable";

export function Taskbar() {
    return (
        <div className="container-fluid main">
            <div className="row ">
                <div className="col-md-12 col-sm-12">
                    {/* <Taskheader /> */}
                    <Tasktable/>
                </div>
            </div>

        </div>
    )
}