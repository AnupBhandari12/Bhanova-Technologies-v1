import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { hotelRooms, burgerMenu } from "@/data/smartlink-demo-content";
import styles from "./ProfileExperiences.module.css";

export function ProfileExperiences({ profile, onAction }) {
  if (!profile.packageId) return null;
  const previews = {
    qr: {
      label: "FRESH FROM THE COUNTER",
      heading: "Your usual. Or a new favourite.",
      action: "menu",
      button: "Open the sample menu",
      items: [
        {
          name: "Cappuccino",
          description: "Your slow-morning companion",
          icon: "Coffee",
        },
        {
          name: "Breakfast toast",
          description: "A brighter start to the day",
          icon: "UtensilsCrossed",
        },
      ],
    },
    tap: {
      label: "MEET YOUR NEXT CRAVING",
      heading: "Made fresh. Gone fast.",
      action: "menu",
      button: "Explore the full menu",
      items: burgerMenu.slice(0, 2),
    },
    pro: {
      label: "ROOM TO SLOW DOWN",
      heading: "Stay a little longer.",
      action: "rooms",
      button: "Explore the room concepts",
      items: hotelRooms.slice(0, 2),
    },
  };
  const preview = previews[profile.packageId];
  return (
    <section
      className={`${styles.experience} ${styles[profile.packageId]}`}
      aria-label={`${profile.name} preview`}
    >
      <span className={styles.label}>{preview.label}</span>
      <h2>{preview.heading}</h2>
      <div className={styles.tiles}>
        {preview.items.map((item, index) => (
          <div key={item.name} className={styles.tile}>
            <div className={styles.art}>
              <span>0{index + 1}</span>
              <Icon name={item.icon} />
            </div>
            <strong>{item.name}</strong>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={(event) =>
          onAction({ action: preview.action, label: preview.button }, event.currentTarget)
        }
      >
        {preview.button}
        <ArrowUpRight size={17} />
      </button>
    </section>
  );
}
