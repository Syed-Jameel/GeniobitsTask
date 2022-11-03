import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import IconLabelButtons from "./AddTask";

export function Taskheader() {
  return (
    <div className="row p-3">
      <div className="col-md-8 col-sm-12">
        <div className="task-header">
          <div className="task-header-Top">
            <div>Task</div>
            <div>
              {<CalendarMonthIcon />}
              <span>9 May,2022</span>
            </div>
          </div>
          <hr></hr>
          <div className="row task-header-bottom d-flex justify-content-between">
            <div className="col-sm-6 btn-container-one">
              <button className="box-1">
                <div>66</div>
                <div>Ongoing</div>
              </button>

              <button className="box-2">
                <div>24</div>
                <div>Delayed</div>
              </button>
            </div>

            <div className="col-sm-6 btn-container-two">
              <button className="box-3">
                <div>10</div>
                <div>Completed</div>
              </button>

              <button className="box-4">
                <div>100</div>
                <div>Assignments</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-12">
      <IconLabelButtons />
      </div>
    </div>
  );
}
