import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Buttons } from '../../components/Button';
import { ClassCard } from '../../components/ClassCard';
import { ScheduleData } from '../../data/data';

export const MyClasses = () => {
  const Icon = <ArrowRight />;
  // const classId = data.class;
  // const classId = useParams();
  const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate(`{/dashboard/MyClasses/${classId}}`);
  // };

  return (
    <>
      <div className="p-2">
        <div className="flex flex-wrap sm:flex-nowrap lg:flex-nowrap justify-between item-center text-slate-700 w-full mb-5">
          <div>
            <h1 className="font-semibold text-2xl mb-1">My Classes</h1>
            <p className="text-sm">Manage your assigned classes and students</p>
          </div>
          <div className="flex gap-1 mt-2 text-lg">
            <p>Total: </p>
            <span className="font-semibold">5 Classes</span>
          </div>
        </div>
        <section className="new-grid">
          {ScheduleData.map((data) => (
            <ClassCard
              header={data.class}
              desc={data.subject}
              Bookstyle={`p-1.5 w-10 h-10 rounded-lg ${
                data.class.includes("A")
                  ? "bg-blue-200 text-blue-700"
                  : "bg-orange-100 text-orange-700"
              } `}
              totalusers={data.totalStudents}
              scheduled={data.scheduleDateAndTime}
              room={data.location}
              articlestyle={"flex flex-col bg-white p-5 rounded-lg gap-2"}
              cardheaderstyle={"flex  justify-between mb-4 "}
              detailstyle={"flex-col"}
              id={data.id}
              button={
                <Buttons
                  text="View Class Details"
                  icon={Icon}
                  action={() => navigate(`${data.id}`)}
                  optionalClassName="flex-1 w-full text-lg gap-1 text-white rounded-lg py-1 px-2 py-2 bg-blue-500 hover:bg-blue-700 text-sm font-semibold px-4"
                />
              }
            />
          ))}
          {/* <article
            key={data.class}
            className="flex flex-col bg-white p-5 rounded-lg gap-2"
          >
            <div className="flex  justify-between mb-4 ">
              <div>
                <h2 className="text-3xl">{}</h2>
                <p className="">{data.subject}</p>
              </div>
              <BookOpen
                className={`p-1.5 w-10 h-10 rounded-lg ${
                  data.class.includes("A")
                    ? "bg-blue-200 text-blue-700"
                    : "bg-orange-100 text-orange-700"
                } `}
              />
            </div>
            <div className="flex flex-col gap-2 my-3 mb-4 text-slate-600 text-sm">
              <div className="flex items-center gap-2">
                <Users />
                <p>{data.totalStudents}</p>
              </div>
              <div className="flex items-center gap-2">
                <Calendar />
                <p>{data.scheduleDateAndTime}</p>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen />
                <p>{data.location}</p>
              </div>
            </div>
            <Buttons
              text="View Class Details"
              icon={Icon}
              optionalClassName="flex-1 w-full py-2 bg-blue-500 hover:bg-blue-700 text-sm font-semibold px-4"
            />
          </article> */}
        </section>
        <footer className="flex flex-col gap-5 bg-white border border-slate-200 rounded-lg p-5 mt-5">
          <p className="font-semibold  text-xl text-slate-800">
            Class Statistics
          </p>
          <div className="flex flex-wrap sm:flex-nowrap  lg:flex-nowrap justify-center items-center gap-5 w-full">
            <div className="flex flex-col items-center bg-blue-100 py-5 rounded-lg px-9 w-full">
              <p className="font-semibold text-xl text-blue-700">5</p>
              <p>Total Classes</p>
            </div>
            <div className="flex flex-col items-center bg-green-100 py-5 rounded-lg px-9 w-full">
              <p className="font-semibold text-xl text-green-700">142</p>
              <p>Total Students</p>
            </div>
            <div className="flex flex-col items-center bg-purple-100 py-5 rounded-lg px-9 w-full">
              <p className="font-semibold text-xl text-purple-700">29</p>
              <p>Avg. Class Size</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
