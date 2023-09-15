import { AttendingDays, RegisterFormDto } from "@/types/registerForm";
import TD from "./TD";

type Props = {
  attendee: RegisterFormDto;
  number: number;
};

const AdminTableRow = ({ attendee, number }: Props) => {
  const { name, email, typeOfDiet, attending } = attendee;

  const convertEnumToString = (attendingDay: AttendingDays): string => {
    switch (attendingDay) {
      case AttendingDays.FRISUN:
        return "Fre-Sön";
      case AttendingDays.SATSUN:
        return "Lör-Sön";
      default:
      case AttendingDays.SAT:
        return "Lör";
    }
  };

  return (
    <tr className="py-4">
      <TD>{number}</TD>
      <TD>{name}</TD>
      <TD>{email}</TD>
      <TD>{convertEnumToString(attending)}</TD>
      <TD>{typeOfDiet}</TD>
    </tr>
  );
};

export default AdminTableRow;
