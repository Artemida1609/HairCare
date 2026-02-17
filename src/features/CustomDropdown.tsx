// import * as React from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import type { SelectChangeEvent } from '@mui/material/Select';

// export default function CustomDropdown() {
//   const [service, setService] = React.useState('');

//   const handleChange = (event: SelectChangeEvent) => {
//     setService(event.target.value);
//   };

//   return (
//       <FormControl fullWidth={true} className='h-full active:outline-[#BF925B] active:outline-solid'>
//         <InputLabel id="demo-simple-select-helper-label">Service</InputLabel>
//         <Select
//           labelId="demo-simple-select-helper-label"
//           id="demo-simple-select-helper"
//           value={service}
//           label="Service"
//           onChange={handleChange}
//           className="text-[#0a0909] h-12 p-4 outline-[#BF925B] outline-solid rounded-sm focus:outline-[#BF925B] focus:outline-solid"
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value={10}>Manicure Pedicure</MenuItem>
//           <MenuItem value={20}>Body Treatment</MenuItem>
//           <MenuItem value={30}>Haircut & Coloring</MenuItem>
//         </Select>
//         {/* <FormHelperText>With label + helper text</FormHelperText> */}
//       </FormControl>
//   );
// }

import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { GoChevronDown } from "react-icons/go";
import useOutsideClick from "../hooks/useOutsideClick";

interface DropdownItem {
  id: string;
  name: string;
  imageUrl?: string;
}

interface DropdownProps {
  id: string;
  title?: string;
  data: DropdownItem[];
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  hasImage?: boolean;
  style?: string;
  selectedId?: string;
  onSelect?: (id: string) => void;
}

const Dropdown = ({
  id,
  title = "Select",
  data,
  position = "bottom-left",
  hasImage,
  style,
  selectedId,
  onSelect,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | undefined>(
    selectedId ? data?.find((item) => item.id === selectedId) : undefined,
  );

  const handleChange = (item: DropdownItem) => {
    setSelectedItem(item);
    onSelect && onSelect(item.id);
    setIsOpen(false);
  };

  useEffect(() => {
    if (selectedId && data) {
      const newSelectedItem = data.find((item) => item.id === selectedId);
      newSelectedItem && setSelectedItem(newSelectedItem);
    } else {
      setSelectedItem(undefined);
    }
  }, [selectedId, data]);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideClick({
    ref: dropdownRef as React.RefObject<HTMLElement>,
    handler: () => setIsOpen(false),
  });

  const dropdownClass = classNames(
    "absolute bg-gray-100 w-max max-h-52 overflow-y-auto py-3 rounded shadow-md z-10",
    {
      "top-full right-0 mt-2": position === "bottom-right",
      "top-full left-0 mt-2": position === "bottom-left",
      "bottom-full right-0 mb-2": position === "top-right",
      "bottom-full left-0 mb-2": position === "top-left",
    },
  );

  return (
    <div
      ref={dropdownRef}
      className="relative outline-[#BF925B] outline-solid rounded-sm w-full flex flex-row items-center "
    >
      <button
        id={id}
        aria-label="Toggle dropdown"
        aria-haspopup="true"
        aria-expanded={isOpen}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={classNames(
          "flex justify-between items-center gap-5 rounded w-full py-2 px-4 bg-[#EBE8DE] text-[#75746f]",
          style,
        )}
      >
        {selectedItem?.name ? (
          <span className="text-black">{selectedItem?.name}</span>
        ) : (
          <span>{title}</span>
        )}
        <GoChevronDown
          size={20}
          className={classNames("transform duration-500 ease-in-out", {
            "rotate-180": isOpen,
          })}
        />
      </button>
      {/* Open */}
      {isOpen && (
        <div aria-label="Dropdown menu" className={dropdownClass}>
          <ul
            role="menu"
            aria-labelledby={id}
            aria-orientation="vertical"
            className="leading-10"
          >
            {data?.map((item) => (
              <li
                key={item.id}
                onClick={() => handleChange(item)}
                className={classNames(
                  "flex items-center cursor-pointer hover:bg-gray-200 px-3",
                  { "bg-gray-300": selectedItem?.id === item.id },
                )}
              >
                {hasImage && (
                  <img
                    src={item.imageUrl}
                    alt="image"
                    loading="lazy"
                    className="w-8 h-8 rounded-full bg-gray-400 object-cover me-2"
                  />
                )}
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
