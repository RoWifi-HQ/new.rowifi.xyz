"use client";
import { ReactNode, useState } from "react";
import { DialogTrigger, Button, Modal, Dialog } from "react-aria-components";

export function MobileMenu({ children }: { children?: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <DialogTrigger isOpen={open} onOpenChange={setOpen}>
      <Button className="ml-auto block sm:hidden">
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </Button>
      <Modal>
        <Dialog className="fixed top-16 left-0 right-0 bottom-0 z-50 dark:bg-gray-980 flex flex-col gap-y-6 items-center focus:outline-none">
          {children}
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
