import { BookOpen, Users, Calendar } from "lucide-react";
import { useParams } from "react-router-dom";
export const ClassCard = ({
  header,
  desc,
  Bookstyle,
  totalusers,
  scheduled,
  room,
  articlestyle,
  cardheaderstyle,
  detailstyle,
  button,
  id = useParams(),
  contentStyle,
}) => {
  return (
    <article key={id} className={`${articlestyle}`}>
      <div className={`${contentStyle}`}>
        <div className={`${cardheaderstyle}`}>
          <div>
            <h2 className="text-3xl">{header}</h2>
            <p className="">{desc}</p>
          </div>
          <BookOpen className={`${Bookstyle}`} />
        </div>
        <div
          className={`flex ${detailstyle} gap-2 my-3 mb-4 text-slate-600 text-sm `}
        >
          <div className="flex items-center gap-2">
            <Users className="w-4" />
            <p>{totalusers}</p>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4" />
            <p>{scheduled}</p>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-4" />
            <p>{room}</p>
          </div>
        </div>
      </div>
      {button}
    </article>
  );
};
