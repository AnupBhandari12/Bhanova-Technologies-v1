"use client";

import { Dialog as DialogPrimitive } from "radix-ui";
import { X } from "lucide-react";
import styles from "./dialog.module.css";

export function Dialog(props) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

export function DialogTrigger(props) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

export function DialogContent({ className = "", children, ...props }) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className={styles.overlay} />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={`${styles.content} ${className}`}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className={styles.close} aria-label="Close">
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
    <DialogPrimitive.Title data-slot="dialog-title" className={className} {...props} />
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
