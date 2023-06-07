import React from 'react';

function Leaf() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="leaf"
      className="svg-inline--fa fa-leaf text-lime-600  -rotate-45 "
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"
      />
    </svg>
  );
}

const veganOrElse = ({ data }) => {
  if (data.vegan) {
    return (
      <>
        <Leaf />
        <Leaf />
      </>
    );
  }

  if (data.vegetarian) <Leaf />;

  return null;
};

export default function Warnung({ data }) {
  const allergene = data.allergene?.map((item) => item.buchstabe);
  const zusatzstoffe = data.zusatzstoffe?.map((item) => item.nummer);

  return (
    <sup className="inline-block no-underline decoration-transparent">
      {allergene?.sort().join(',')}
      {allergene && zusatzstoffe ? ',' : ''}
      {zusatzstoffe
        ?.sort((a, b) => a - b)
        .join(',')}
      {veganOrElse(data)}
      {data.hot ? '🌶️' : ''}
    </sup>
  );
}
