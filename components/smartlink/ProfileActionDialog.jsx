import { ArrowUpRight } from "lucide-react";
import { CONTACT } from "@/config/site";
import { cafeMenu } from "@/data/smartlink";
import { burgerMenu, hotelRooms, hotelGallery } from "@/data/smartlink-demo-content";
import { getSmartLinkPackage } from "@/data/smartlink-packages";
import { createPackageEnquiryUrl } from "@/lib/smartlink";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Icon } from "@/components/shared/Icon";
import { BookingPreview } from "./BookingPreview";
import styles from "./SmartLinkProfile.module.css";
import experienceStyles from "./ProfileExperiences.module.css";

export function ProfileActionDialog({ profile, activeAction, onClose, triggerRef }) {
  const plan = getSmartLinkPackage(profile.packageId);
  const action = activeAction?.action;
  const lists = {
    menu: profile.packageId === "tap" ? burgerMenu : cafeMenu,
    rooms: hotelRooms,
  };
  const headings = {
    menu: `${profile.name} — sample menu`,
    rooms: "Find your room",
    gallery: "A glimpse of the experience",
    booking: "Preview a hotel booking enquiry",
  };
  return (
    <Dialog
      open={Boolean(activeAction)}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent
        className={styles.dialog}
        onCloseAutoFocus={(event) => {
          event.preventDefault();
          triggerRef.current?.focus();
        }}
      >
        <DialogHeader>
          <DialogTitle>{headings[action] || activeAction?.label}</DialogTitle>
          <DialogDescription>
            {action === "sample"
              ? `${profile.name} is a fictional example. Your customer's profile would open their own verified contact, location or social link here.`
              : "Interactive design example. Menu, rooms, prices and booking options are illustrative, not real offers."}
          </DialogDescription>
        </DialogHeader>
        {lists[action] && (
          <ul className={styles.menu}>
            {lists[action].map((item) => (
              <li key={item.name}>
                <div>
                  {item.icon && (
                    <Icon name={item.icon} className={experienceStyles.listIcon} />
                  )}
                  <strong>{item.name}</strong>
                  <p>{item.description}</p>
                </div>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        )}
        {action === "gallery" && (
          <div className={experienceStyles.gallery}>
            {hotelGallery.map((item) => (
              <figure key={item.id}>
                <div className={`${experienceStyles.scene} ${experienceStyles[item.id]}`}>
                  <Icon name={item.icon} />
                  <span />
                </div>
                <figcaption>
                  <strong>{item.title}</strong>
                  <small>{item.caption}</small>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
        {action === "booking" && <BookingPreview />}
        <a
          className={styles.dialogCta}
          href={plan ? createPackageEnquiryUrl(plan) : CONTACT.smartLinkWhatsapp}
          target="_blank"
          rel="noreferrer"
        >
          Discuss your own {plan?.name || "SmartLink"}
          <ArrowUpRight size={18} />
        </a>
      </DialogContent>
    </Dialog>
  );
}
