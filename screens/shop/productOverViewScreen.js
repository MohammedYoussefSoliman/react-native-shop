import React from "react";
import { FlatList, Button, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import * as cartAction from "../../store/actions/cart";
import ProductItem from "../../components/shop/ProductItem";
import HeaderBtn from "../../components/UI/headerButton/headerButton";
import Colors from "../../constants/colors";

const ProductOverviewScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.availableProducts);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const selectItemHandler = (id, title) => {
    navigation.navigate("ProductDetails", {
      prodId: id,
      prodTitle: title,
    });
  };
  const getQuestions = async () => {
    try {
      setLoading(true);
      const { data } = axios.get(base, "./questions");
      dispatch(cartAction.AddQuestions(data));
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // componentDidMount
    getQuestions();
  }, []);

  /*

  const params = useParams()
  const history = useHistory()

  const username = useSelector(state => state.user.name)

  const handleClickAnswer = async (answer, username) => {
    try {
      setButtonLoading(true);
      const { data } = await axios.get(base, "./questions");
      dispatch(cartAction.AddQuestions(data));
    } catch (e) {
    } finally {
      setLoading(false);
      props.questionsLength // 5
      if(props.index < questionsLength-1) {
        history.push(`/${props.index+1}`)
      }else{
        history.push(`/results`)
      }
    }
  }

  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  
  return (
    <>
      <Switch>
      questions.map((q, index)=> {
        return (
          <Route path={/index}>
          <QuestionComponent key={q.id} title={q.name} answer={q.answer} index={index} />
          </Route>
        )
      })
      <Route path={/results} component={Results} />
    
    </Switch>
  )

      <div>
        <h3>{props.title}</h3>
        <div className="question--card">
          <CHeck />
        </div>

        {!loadingButton ? <Button onClick={()=>handleClickAnswer(answer, username)}> : <Button disabled={true} /> }
        <Button onClick={()=>handleClickAnswer(answer, username)}>
      </div>
  */

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          title={itemData.item.title}
          price={itemData.item.price}
          image={itemData.item.imageUrl}
          onSelect={() =>
            selectItemHandler(itemData.item.id, itemData.item.title)
          }
        >
          <Button
            color={Colors.primary}
            title="View Details"
            onPress={() =>
              selectItemHandler(itemData.item.id, itemData.item.title)
            }
          />
          <Button
            color={Colors.primary}
            title="Add to cart"
            onPress={() => {
              dispatch(cartAction.addToCart(itemData.item));
            }}
          />
        </ProductItem>
      )}
    />
  );
};

ProductOverviewScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "All Products",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderBtn}>
        <Item
          title="Cart"
          iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          onPress={() => {
            navData.navigation.navigate("Cart");
          }}
        />
      </HeaderButtons>
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderBtn}>
        <Item
          title="menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default ProductOverviewScreen;
