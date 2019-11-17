import styled from "styled-components";

const StyledLogo = styled.div`
  svg {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    padding: 0;
    position: absolute;
    top: 1em;
    left: 4em;
    width: 64px;
    rect {
      fill: ${({ theme }) => theme.primaryCol};
    }
    &:hover {
      color: #333644;
      .JS,
      rect {
      }
      .JS {
        fill: #e2e2e2;
      }
      rect {
        fill: #333644;
      }
    }
  }
`;

export const Logo = ({ size }) => {
  return (
    <StyledLogo>
      <svg
        baseProfile="tiny"
        version="1.1"
        viewBox="0 0 548.1 549.4"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          className="rectangle"
          x=".6"
          y=".3"
          width="549.9"
          height="548.1"
        />
        <g className="JS" fill="#262626">
          <path d="m216 492l36.4-22c7 12.4 13.4 23 28.7 23 14.7 0 23.9-5.7 23.9-28.1v-151.9h44.7v152.5c0 46.3-27.1 67.3-66.7 67.3-35.8 0.1-56.5-18.4-67-40.8z" />
          <path d="m373.9 487.2l36.4-21.1c9.6 15.6 22 27.1 44 27.1 18.5 0 30.3-9.3 30.3-22 0-15.3-12.1-20.7-32.5-29.7l-11.2-4.8c-32.2-13.7-53.6-30.9-53.6-67.3 0-33.5 25.5-59 65.4-59 28.4 0 48.8 9.9 63.5 35.7l-34.8 22.3c-7.7-13.7-16-19.1-28.7-19.1-13.1 0-21.4 8.3-21.4 19.1 0 13.4 8.3 18.8 27.4 27.1l11.2 4.8c38 16.3 59.3 32.9 59.3 70.2 0 40.2-31.6 62.2-74 62.2-41.4 0.2-68.2-19.6-81.3-45.5z" />
        </g>
        <path
          d="m91.3 505h36.9v-56.2h-34.3v-26.3h61.9v82.5h31.6v26.3h-96.1v-26.3zm71.3-114.8c0 2.9-0.5 5.7-1.6 8.2-1.1 2.6-2.6 4.8-4.5 6.6s-4.1 3.3-6.7 4.4-5.2 1.6-8 1.6c-2.9 0-5.6-0.5-8.1-1.6s-4.7-2.6-6.6-4.4-3.4-4-4.5-6.6-1.6-5.3-1.6-8.2 0.5-5.7 1.6-8.2c1.1-2.6 2.6-4.8 4.5-6.6s4.1-3.3 6.6-4.4 5.2-1.6 8.1-1.6c2.8 0 5.4 0.5 8 1.6s4.8 2.6 6.7 4.4 3.4 4 4.5 6.6c1 2.6 1.6 5.3 1.6 8.2z"
          fill="#E7E7E6"
        />
      </svg>
    </StyledLogo>
  );
};

export default Logo;
