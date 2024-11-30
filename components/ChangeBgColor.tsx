"use client";

export default function ChangeBgColor({ color }: any) {
  return (
    <style jsx global>
      {`
    body {
      background: ${color}};
    }
  `}
    </style>
  );
}
