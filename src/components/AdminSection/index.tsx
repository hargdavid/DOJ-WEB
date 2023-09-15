import { AttendingDays, RegisterFormDto } from "@/types/registerForm";
import Title from "../Content/Title";
import AdminTable from "./AdminTable";
import Button from "../Button";
import { useEffect, useState } from "react";
import Heading3 from "../Content/Heading3";

type Props = {
  registered: RegisterFormDto[];
};

const AdminSection = ({ registered }: Props) => {
  const [filter, setFilter] = useState<AttendingDays | null>(null);
  const [filteredAttendees, setFilteredAttendees] =
    useState<RegisterFormDto[]>(registered);

  const toggleFilter = (newFilter: AttendingDays) => {
    if (newFilter === filter) {
      setFilter(null);
    } else {
      setFilter(newFilter);
    }
  };

  useEffect(() => {
    if (filter !== null) {
      setFilteredAttendees(
        registered.filter((register) => register.attending === filter)
      );
    } else {
      setFilteredAttendees(registered);
    }
  }, [filter, registered]);

  return (
    <>
      <div className="pt-44"></div>
      <section className="flex items-center justify-center flex-col gap-6 pb-8">
        <Title title="Registrerade" />
        <Heading3 text="Filtrera" />
        <div className="flex gap-6">
          <Button
            onClick={() => toggleFilter(AttendingDays.FRISUN)}
            outlined={filter !== AttendingDays.FRISUN}
          >
            Fredag-Söndag
          </Button>
          <Button
            onClick={() => toggleFilter(AttendingDays.SATSUN)}
            outlined={filter !== AttendingDays.SATSUN}
          >
            Lördag-Söndag
          </Button>
          <Button
            onClick={() => toggleFilter(AttendingDays.SAT)}
            outlined={filter !== AttendingDays.SAT}
          >
            Lördag
          </Button>
        </div>
        <AdminTable attendance={filteredAttendees} />
      </section>
    </>
  );
};

export default AdminSection;
