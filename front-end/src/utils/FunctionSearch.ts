import { ISearchRandomUserGenarete } from "../hooks/useValidateForm";
import { IUserRandom } from "../pages/RandomUserGeneratorPage";

interface ISearchParams {
  data: ISearchRandomUserGenarete;
  array: IUserRandom[];
  setDisplay: React.Dispatch<React.SetStateAction<IUserRandom[] | undefined>>;
}

const handleSearch = ({ array, data, setDisplay }: ISearchParams) => {
  switch (data.filter) {
    case "email":
      {
        const usersFound = array.filter((e: IUserRandom) =>
          e.email.toLocaleLowerCase().includes(data.search.toLocaleLowerCase())
        );

        setDisplay(usersFound);
      }
      break;
    case "name":
      {
        // eslint-disable-next-line array-callback-return
        const usersFound = array.filter((e: IUserRandom) => {
          const fullname = `${e.name.title} ${e.name.first} ${e.name.last}`;
          if (
            fullname
              .toLocaleLowerCase()
              .includes(data.search.toLocaleLowerCase())
          )
            return e;
        });
        setDisplay(usersFound);
      }
      break;
    case "username": {
      const usersFound = array.filter((e: IUserRandom) =>
        e.login.username
          .toLocaleLowerCase()
          .includes(data.search.toLocaleLowerCase())
      );
      setDisplay(usersFound);
    }
  }
};

export { handleSearch };
