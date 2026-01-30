import { Fragment, useContext } from "react";
import Context from "../../context/context";

const BlogSection = () => {
  const videos = [
    {
      id: "dQw4w9WgXcQ",
      title: "Charlas sobre Derecho Criminal",
      date: "Enero 15, 2025",
    },
    {
      id: "jNQXAC9IVRw",
      title: "Charlas sobre Derecho Empresarial",
      date: "Enero 10, 2025",
    },
    {
      id: "9bZkp7q19f0",
      title: "Charlas sobre Servicios Legales",
      date: "Enero 5, 2025",
    },
    {
      id: "kJQP7kiw5Fk",
      title: "Charlas sobre Finanzas Legales",
      date: "Diciembre 28, 2024",
    },
  ];

  return (
    <Fragment>
      <div className="content blog">
        {/* title */}
        <div className="title">
          <span>Charlas</span>
        </div>
        {/* content */}
        <div className="row border-line-v">
          {videos.map((video, index) => (
            <div key={index} className="col col-d-6 col-t-6 col-m-12">
              <div className="box-item">
                <div className="image" style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
                  <iframe
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="desc">
                  <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noreferrer">
                    <span className="date">{video.date}</span>
                  </a>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="name"
                  >
                    {video.title}
                  </a>
                </div>
              </div>
            </div>
          ))}
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default BlogSection;

export const BlogClassic = () => {
  const { changeNav } = useContext(Context);
  return (
    <Fragment>
      <div className="content blog">
        {/* title */}
        <div className="title">Latest Posts</div>
        {/* content */}
        <div className="row border-line-v">
          {/* blog item */}
          <div className="col col-d-12 col-t-12 col-m-12 border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#" onClick={() => changeNav("blog-post")}>
                  <img src="images/blog/blog1.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-document-text" />
                  </span>
                  <span className="date">
                    <strong>20</strong>Jun
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="#"
                  onClick={() => changeNav("blog-post")}
                  className="name"
                >
                  By spite about do of do allow blush
                </a>
                <div className="category">Design</div>
              </div>
            </div>
          </div>
          {/* blog item */}
          <div className="col col-d-12 col-t-12 col-m-12 border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#" onClick={() => changeNav("blog-post")}>
                  <img src="images/blog/blog2.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-document-text" />
                  </span>
                  <span className="date">
                    <strong>19</strong>Jun
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="#"
                  onClick={() => changeNav("blog-post")}
                  className="name"
                >
                  Two Before Arrow Not Relied
                </a>
                <div className="category">Coding</div>
              </div>
            </div>
          </div>
          {/* blog item */}
          <div className="col col-d-12 col-t-12 col-m-12 border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#" onClick={() => changeNav("blog-post")}>
                  <img src="images/blog/blog3.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-document-text" />
                  </span>
                  <span className="date">
                    <strong>20</strong>Jun
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="#"
                  onClick={() => changeNav("blog-post")}
                  className="name"
                >
                  By spite about do of do allow blush
                </a>
                <div className="category">Travel</div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
