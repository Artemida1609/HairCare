import emailjs from "@emailjs/browser";
import {
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { Button } from "./Button";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";

interface formProps {
  setActiveServiceModal: Dispatch<SetStateAction<boolean>>;
  activeServiceName: string;
  setActiveBarbersModal: Dispatch<SetStateAction<boolean>>;
  activeBarberName: string;
}

export const BookForm = ({ setActiveServiceModal, activeServiceName, setActiveBarbersModal, activeBarberName }: formProps) => {
  const form = useRef<HTMLFormElement>(null);
  const [bookingDate, setBookingDate] = useState<dayjs.Dayjs | null>(dayjs());


  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }

    emailjs
      .sendForm(
        "service_kg5i1z9",
        "template_q5i3d9v",
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          alert("Лист відправлено успішно!");
        },
        (error) => {
          alert("Помилка при відправці: " + error.text);
        },
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
    >
      <input type="hidden" name="service_type" value={activeServiceName} />
      <input type="hidden" name="barber_name" value={activeBarberName} />
      <input type="hidden" name="booking_time" value={bookingDate ? bookingDate.format('DD.MM.YYYY HH:mm') : ''} />

      <input
        type="text"
        name="user_name"
        placeholder="Name"
        className="h-12 p-4 outline-[#BF925B] outline-solid rounded-sm focus:outline-[#BF925B] focus:outline-solid"
      />
      <input
        type="tel"
        name="user_phone"
        placeholder="Phone"
        pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
        className="h-12 p-4 outline-[#BF925B] outline-solid rounded-sm focus:outline-[#BF925B] focus:outline-solid"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="h-12 p-4 outline-[#BF925B] outline-solid rounded-sm focus:outline-[#BF925B] focus:outline-solid"
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDateTimePicker
          label="Choose Date & Time"
          value={bookingDate}
          onChange={(newValue) => setBookingDate(newValue)}
          slotProps={{
            textField: {
              fullWidth: true,
              variant: "outlined",
              sx: {
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#BF925B" },
                },
              },
            },
            dialog: {
              sx: {
                "& .MuiPaper-root": {
                  borderRadius: "12px",
                },
              },
            },
          }}
        />
      </LocalizationProvider>

      <button
        className="h-12 p-4 outline-[#BF925B] outline-solid rounded-sm 
        focus:outline-[#BF925B] focus:outline-solid flex items-center cursor-pointer 
        hover:bg-[#BF925B] transition-all duration-300 w-full text-left capitalize"
        onClick={() => {
          setActiveServiceModal(true);
        }}
        type="button"
      >
        {activeServiceName.charAt(0).toUpperCase() + activeServiceName.slice(1)}
      </button>
      <button
        className="h-12 p-4 outline-[#BF925B] outline-solid rounded-sm 
        focus:outline-[#BF925B] focus:outline-solid flex items-center cursor-pointer 
        hover:bg-[#BF925B]"
        type="button"
        onClick={() => {
          setActiveBarbersModal(true);
        }}
      >
        {activeBarberName.charAt(0).toUpperCase() + activeBarberName.slice(1)}
      </button>

      <textarea
        name="message"
        placeholder="Message"
        className="h-36 p-4 outline-[#BF925B] outline-solid rounded-sm focus:outline-[#BF925B] focus:outline-solid sm:col-span-2"
      />
      <Button
        type="submit"
        text="Make an appointment"
        styles="sm:col-span-2 "
      />
    </form>
  );
};
