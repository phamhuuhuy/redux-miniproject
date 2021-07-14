import Banner from "components/Banner";
import PhotoForm from "features/Photo/components/PhotoForm";
import { addPhoto, updatePhoto } from "features/Photo/photoSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./styles.scss";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();

  const history = useHistory();

  const { photoId } = useParams();

  const isModeAdd = !photoId;

  const editedPhoto = useSelector((state) =>
    state.photos.find((photo) => photo.id === +photoId)
  );

  const initialValues = isModeAdd
    ? {
        title: "",
        categoryId: null,
        photo: "",
      }
    : editedPhoto;

  const handleOnSubmit = (values) => {
    return new Promise((resolve) => {
      console.log("Form submit", values);

      setTimeout(() => {
        if (isModeAdd) {
          const action = addPhoto(values);
          dispatch(action);
        } else {
          const action = updatePhoto(values);
          console.log(action);
          dispatch(action);
        }
        history.push("/photos");
        resolve(true);
      }, 2000);
    });
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm
          isModeAdd={isModeAdd}
          initialValues={initialValues}
          onSubmit={handleOnSubmit}
        />
      </div>
    </div>
  );
}

export default AddEditPage;
