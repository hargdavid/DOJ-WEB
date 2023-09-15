import { RegisterFormDto } from "@/types/registerForm";
import AdminTableRow from "./AdminTableRow";
import TableHead from "./TableHead";

type Props = { attendance: RegisterFormDto[] };

const AdminTable = ({ attendance }: Props) => {
  return (
    <table className="w-full max-w-6xl m-auto pb-8">
      <thead className="text-left">
        <tr>
          <TableHead>#</TableHead>
          <TableHead>Namn</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Deltar</TableHead>
          <TableHead>Kostpreferenser</TableHead>
        </tr>
      </thead>
      <tbody>
        {attendance.map((attendee, key) => (
          <AdminTableRow key={key} attendee={attendee} number={key + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default AdminTable;
