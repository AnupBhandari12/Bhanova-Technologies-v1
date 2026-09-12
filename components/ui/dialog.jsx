"use client";

import { Dialog as DialogPrimitive } from "radix-ui";
import { X } from "lucide-react";

export function Dialog(props) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

export function DialogTrigger(props) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

export function DialogContent({ className = "", children, ...props }) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50" />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={`fixed left-1/2 top-1/2 z-50 grid -translate-x-1/2 -translate-y-1/2 gap-4 bg-white outline-none ${className}`}
        {...props}
      >
        {children}
        <DialogPrimitive.Close
          className="absolute right-4 top-4 rounded-md p-1 opacity-70 transition hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Close"
        >
          <X size={18} />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

export function DialogHeader({ className = "", ...props }) {
  return <div data-slot="dialog-header" className={className} {...props} />;
}

export function DialogTitle({ className = "", ...props }) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={className}
      {...props}
    />
  );
}

export function DialogDescription({ className = "", ...props }) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={className}
      {...props}
    />
  );
}
