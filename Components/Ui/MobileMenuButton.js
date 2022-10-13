import Link from "next/link";

export default function MoblileMenuButton(props) {
  return (
    <button type="button" onClick={props.buttonHandler}>
      <Link href={props.href}>{props.name}</Link>
    </button>
  );
}
